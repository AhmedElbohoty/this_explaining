/* ================== Explicit Binding ======================= */
globalThis.age = "Global 1000";

function getAge() {
  console.log(this.age);
}

const object_1 = { age: "Object 1 100" };
const object_2 = { age: "Object 2 200" };
const object_3 = { age: "Object 3 300" };

// Hard binding
const func_1 = getAge.bind(object_2);

/* =========================================== */
console.log("================================");
getAge.call(object_1);
getAge.call(object_2);
getAge.call(object_3);
console.log("================================");
func_1.call(object_1);
func_1.call(object_2);
func_1.call(object_3);
console.log("================================");
