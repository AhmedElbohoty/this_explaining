/* ================== Implicitly Lost ======================= */
globalThis.age = "Global 1000";

function getAge() {
  console.log(this.age);
}

const object_1 = {
  age: "Object 1 100",
  getAge: getAge
};

const func_1 = object_1.getAge;

/* =========================================== */
console.log("================================");
func_1();
console.log("================================");
