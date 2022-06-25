function sayHello(message) {
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
var a;
a = 5;
a = "124";
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
a = ["1", 2];
// TYPE INFERENCE
var x = "Serif";
// Yazmak yerine
var newX;
newX = "serif";
// Yazılmalıdır zaten typescript ilk durumdaki gibi yazılırsa type'ını anlıyor.
// Arrays of types
var myArrayString;
myArrayString = ["1", "2", "3", "4", "5", "6", "7"];
var myArrayNumber;
myArrayNumber = [1, 2, 3, 4, 5, 6, 7];
var myArrayBoolean;
myArrayBoolean = [true, false, true, false];
var myArrayAny;
myArrayAny = [1, "2", "12", 4, 5, 6, 7, undefined, null, NaN];
// Enum types
var Color;
(function (Color) {
    Color[Color["Purple"] = 0] = "Purple";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Black"] = 3] = "Black";
})(Color || (Color = {}));
// let win: Window = window;
// console.log(win);
var bgColor = Color.Purple.toString();
// tuple types
var error;
error = [
    "Something went wrong",
    404,
    {
        id: 1,
        responseMessage: "Something went wrong",
        details: "Your request was invalid"
    },
    false,
];
// Type assertions
var message;
message = "Serif Test";
// Warning : message parametresi string dışında herhengi bir type ile set edilirse
// ts tarafından uyarı alınmaz (ts kandırılmış) ama js tarafında string için
// kullanılan metodlar geçerli olmayacı için hata alınabilir.
var assertionWithAs = message.toLowerCase();
var user = {
    name: "Serif",
    age: 25,
    favColor: "#cccccc",
    isLiked: false,
    data: [
        {
            id: "1",
            name: "Serif",
            isAdmin: false,
            tags: ["1243", "124214"]
        },
    ]
};
var admin = {
    name: "SERİF",
    age: 25,
    language: "AR",
    role: 1,
    color: {
        name: "primary",
        hex: "#000000",
        textColor: "white"
    }
};
admin.color.hex = "#CCCCCC";
admin.color.name = "PRIMARY";
admin.color.textColor = "green";
var newPerson;
newPerson = {
    name: "Rasit",
    age: 26,
    language: "AR",
    role: 1,
    color: {
        hex: "#000000",
        name: "primary",
        textColor: "white"
    }
};
/**
 * Functions
 * Default, Optional Params
 */
var add = function (n1, n2) {
    console.log(n1, n2);
    return n1 + n2;
};
// Optional Params
var logUser = function (firstName, lastName, email) {
    console.log("".concat(firstName, " ").concat(lastName, " ").concat(email));
};
logUser("Şerif", "Çolakel");
// Default params
function getUser(firstName, lastName, email) {
    if (email === void 0) { email = "serifcolakel@gmail.com"; }
    console.log("".concat(firstName, " ").concat(lastName, " ").concat(email));
    return firstName + " " + lastName + " " + email;
}
getUser("Şerif", "colakel");
function getUserWithUnion(_a) {
    var firstName = _a.firstName, lastName = _a.lastName, _b = _a.email, email = _b === void 0 ? "serifcolakel@gmail.com" : _b;
    console.log("".concat(firstName, " ").concat(lastName, " ").concat(email));
    return firstName + " " + lastName + " " + email;
}
var initialValue = {
    firstName: "124124",
    lastName: "123123",
    email: "serifcolakel@gmail.com"
};
getUserWithUnion(initialValue);
var newEmployee;
newEmployee = {
    name: "Şerif",
    employeeCode: "Engineer",
    phoneNumber: "+905398568303",
    age: 25,
    getSalary: function (salary) { return salary * 2; },
    getPerformances: function (performances) {
        return (performances * performances) / 100;
    }
};
newEmployee.getPerformances = function (performances) {
    return (performances * 2) / 100;
};
var Lion;
Lion = {
    age: 10,
    gender: "Female",
    id: "125214",
    name: "White Lion",
    type: "King",
    position: "Middle Position",
    weight: 380
};
var Employees = /** @class */ (function () {
    function Employees(name, employeeCode, age, phoneNumber, getSalary) {
        this.getSalary = function (salary) {
            return salary * 500;
        };
        this.getPerformances = function (pointer) {
            return (pointer * 100) / 20;
        };
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.employeeCode = employeeCode;
        this.name = name;
        this.getSalary = getSalary;
    }
    return Employees;
}());
var newEmp = new Employees("124", "124", 25, "124214", function (salary) { return salary * 2; });
console.log(newEmp);
console.log(newEmp.getSalary(1));
console.log(newEmp.getPerformances(1));
