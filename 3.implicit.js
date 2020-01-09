/* ================== Implicit Binding ======================= */
globalThis.age = "Global 1000";

function getAge() {
  console.log(this.age);
}

const object = {
  age: "Object 100",
  getAge: getAge
};

const object_2 = {
  age: "Object 2 200",
  object: object
};

/* =========================================== */
console.log("================================");
/* object.getAge();
console.log("================================"); */
object_2.object.getAge();
console.log("================================");
