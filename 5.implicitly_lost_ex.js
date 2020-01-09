/* ================== Implicitly Lost Example ======================= */
globalThis.age = "Global 1000";

function getAge() {
  console.log(this.age);
}

const object_1 = {
  age: "Object 100",
  getAge: getAge
};

function run(callback) {
  callback();
}

/* =========================================== */
console.log("================================");
run(object_1.getAge);
console.log("================================");
