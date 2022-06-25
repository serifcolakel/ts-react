function sayHello(message: string): void {
  console.log(message);
  //return console.log(message);
}

sayHello("Hi");

/**
 * @typeAnnotations :type
 * Any
 * Number
 * String
 * Boolean
 * Arrays string[], number[], boolean[], any[]
 * Enum
 * Tuple [type1, type2]
 * Unknown
 * TYPE INFERENCE
 */

// TS -> Normal JS for any type annotation don't use
let a: any;
a = 5;
a = "124";
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
a = ["1", 2];

// TYPE INFERENCE
let x: string = "Serif";
// Yazmak yerine
let newX: string;
newX = "serif";
// Yazılmalıdır zaten typescript ilk durumdaki gibi yazılırsa type'ını anlıyor.

// Arrays of types

let myArrayString: string[];
myArrayString = ["1", "2", "3", "4", "5", "6", "7"];

let myArrayNumber: number[];
myArrayNumber = [1, 2, 3, 4, 5, 6, 7];

let myArrayBoolean: boolean[];
myArrayBoolean = [true, false, true, false];

let myArrayAny: any[];
myArrayAny = [1, "2", "12", 4, 5, 6, 7, undefined, null, NaN];

// Enum types

enum Color {
  Purple,
  Red,
  Blue,
  Black,
}

// let win: Window = window;
// console.log(win);

let bgColor: string = Color.Purple.toString();

// tuple types

let error: [string, number, any, boolean];
error = [
  "Something went wrong",
  404,
  {
    id: 1,
    responseMessage: "Something went wrong",
    details: "Your request was invalid",
  },
  false,
];

// Type assertions

let message;
message = "Serif Test";
// Warning : message parametresi string dışında herhengi bir type ile set edilirse
// ts tarafından uyarı alınmaz (ts kandırılmış) ama js tarafında string için
// kullanılan metodlar geçerli olmayacı için hata alınabilir.
const assertionWithAs = (message as string).toLowerCase();
// const assertionWithSecondWay = (<string>(
//   localStorage.getItem("message")
// )).toLowerCase();

/**
 * Object Type
 */

type Data = {
  id: string;
  name: string;
  isAdmin: boolean;
  tags: string[];
};
let user: {
  name: string;
  age: number;
  favColor: string;
  isLiked: boolean;
  data: Data[];
} = {
  name: "Serif",
  age: 25,
  favColor: "#cccccc",
  isLiked: false,
  data: [
    {
      id: "1",
      name: "Serif",
      isAdmin: false,
      tags: ["1243", "124214"],
    },
  ],
};

/**
 * Union type
 * (type1 | type2 | type3 | type4 | type5)
 * Literal type
 */

type ColorType = {
  name: string;
  hex: string;
  textColor: "black" | "red" | "green" | "yellow" | "white";
};
type person = {
  name: string;
  age: number | string; // union type
  language: "EN" | "US" | "TR" | "AR"; // literal type
  role: "admin" | "employee" | 1; // literal type
  color: ColorType;
};
let admin: person = {
  name: "SERİF",
  age: 25,
  language: "AR",
  role: 1,
  color: {
    name: "primary",
    hex: "#000000",
    textColor: "white",
  },
};
admin.color.hex = "#CCCCCC";
admin.color.name = "PRIMARY";
admin.color.textColor = "green";
let newPerson: person;
newPerson = {
  name: "Rasit",
  age: 26,
  language: "AR",
  role: 1,
  color: {
    hex: "#000000",
    name: "primary",
    textColor: "white",
  },
};

/**
 * Functions
 * Default, Optional Params
 */
const add = (n1: string, n2: number) => {
  console.log(n1, n2);
  return n1 + n2;
};

// Optional Params
const logUser = (firstName: string, lastName: string, email?: string) => {
  console.log(`${firstName} ${lastName} ${email}`);
};

logUser("Şerif", "Çolakel");

// Default params
function getUser(
  firstName: string,
  lastName: string,
  email = "serifcolakel@gmail.com"
) {
  console.log(`${firstName} ${lastName} ${email}`);
  return firstName + " " + lastName + " " + email;
}
getUser("Şerif", "colakel");
// Default params with union type
type User = {
  firstName: string | number;
  lastName: string;
  email?: string;
};
function getUserWithUnion({
  firstName,
  lastName,
  email = "serifcolakel@gmail.com",
}: User) {
  console.log(`${firstName} ${lastName} ${email}`);
  return firstName + " " + lastName + " " + email;
}
let initialValue: User = {
  firstName: "124124",
  lastName: "123123",
  email: "serifcolakel@gmail.com",
};
getUserWithUnion(initialValue);

/**
 * Interfaces
 */

interface Employee {
  name: string;
  employeeCode: string;
  age: number;
  readonly phoneNumber: string;
  getSalary: (salary: number) => number;
  getPerformances: (performances: number) => number;
}

let newEmployee: Employee;
newEmployee = {
  name: "Şerif",
  employeeCode: "Engineer",
  phoneNumber: "+905398568303",
  age: 25,
  getSalary: (salary: number) => salary * 2,
  getPerformances: (performances: number) =>
    (performances * performances) / 100,
};

newEmployee.getPerformances = (performances: number) =>
  (performances * 2) / 100;
// newEmployee.phoneNumber = "+905398568303"; // Readonluy it cannot be changed

/**
 * Extending Interfaces
 */
interface Animal {
  id: string;
  name: string;
  age: number;
  weight: number;
  type: string;
  gender: string;
}

interface Lion extends Animal {
  position: string;
}

let Lion: Lion;
Lion = {
  age: 10,
  gender: "Female",
  id: "125214",
  name: "White Lion",
  type: "King",
  position: "Middle Position",
  weight: 380,
};

class Employees implements Employee {
  name: string;
  employeeCode: string;
  age: number;
  phoneNumber: string;
  getSalary = (salary: number) => {
    return salary * 500;
  };
  constructor(
    name: string,
    employeeCode: string,
    age: number,
    phoneNumber: string,
    getSalary: (salary: number) => number
  ) {
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.employeeCode = employeeCode;
    this.name = name;
    this.getSalary = getSalary;
  }
  getPerformances = (pointer: number) => {
    return (pointer * 100) / 20;
  };
}
let newEmp = new Employees(
  "124",
  "124",
  25,
  "124214",
  (salary: number) => salary * 2
);
console.log(newEmp);
console.log(newEmp.getSalary(1));
console.log(newEmp.getPerformances(1));
