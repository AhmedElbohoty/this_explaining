"use strict";
globalThis.age = "Global 5000";

function getAge() {
  console.log(this);
}

getAge.age = 200;
/* =========================================== */
console.log("================================");
getAge();
//console.log(getAge);
console.log("================================");
