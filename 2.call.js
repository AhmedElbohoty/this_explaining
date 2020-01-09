globalThis.age = "Global 5000";
/* ================== Call ======================= */
function getAge() {
  console.log(this);
}

const object = {
  age: "Object 100"
};

const object_2 = {
  age: "Object 2 200"
};
/* =========================================== */
console.log("================================");
getAge();
console.log("================================");
getAge.apply(object);
console.log("================================");
getAge.apply(object_2);
console.log("================================");
