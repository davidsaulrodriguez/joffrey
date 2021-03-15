/* eslint-disable no-unused-vars */
let idb;
const request = indexedDB.open("joffrey", 1.0);

request.onupgradeneeded = function (event) {
  const idb = event.target.result;
  idb.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function (event) {
  idb = event.target.result;

  // check if app is online before reading from idb
  if (navigator.onLine) {
    queryIDB();
  }
};

request.onerror = function (event) {
  console.log("🚨 error: " + event.target.errorCode);
};

function saveRecord(record) {
  const transaction = idb.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");

  store.add(record);
}

function queryIDB() {
  const transaction = idb.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  const getAll = store.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          const transaction = idb.transaction(["pending"], "readwrite");
          const store = transaction.objectStore("pending");
          store.clear();
        });
    }
  };
}
function deletePending() {
  const transaction = idb.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  store.clear();
}

window.addEventListener("online", queryIDB);
