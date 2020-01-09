/* ================== Implicit Binding ======================= */
globalThis.age = "Global 1000";

function getAge() {
  console.log(this.age);
}

const object_1 = {
  age: "Object 1 100",
  getAge: getAge
};

const object_2 = {
  age: "Object 2 200"
};

/* =========================================== */
console.log("================================");
object_1.getAge.call(object_2);
console.log("================================");
