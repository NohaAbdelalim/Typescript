var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1-	Create array that accept  number only 
var arr;
//2-	Create array that accept string and number only and print all items
var arr1;
arr1 = ["a", 1, 5, "b"];
console.log(arr1);
//3-	Create a variable that accept number and Boolean only 
var y;
y = true;
y = 2;
//4-	Create function with two parameter try to call it without any parameter “handling”
function myfun(x1, x2) {
    if (x1 == undefined && x2 != undefined)
        return x2;
    else if (x2 == undefined && x1 != undefined)
        return x1;
    else if (x1 != undefined && x2 != undefined)
        return x1 + x2;
    return;
}
myfun();
var Employee = /** @class */ (function () {
    function Employee(employeeData) {
        this.id = employeeData.id;
        this.name = employeeData.name;
        this._username = employeeData.username;
        this.email = employeeData.email;
        this.address = employeeData.address;
    }
    Object.defineProperty(Employee.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.Getaddress = function () {
        return this.address;
    };
    return Employee;
}());
var employeeData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
};
var emp = new Employee(employeeData);
console.log(emp);
//6-	Create class manager inherit from employee class and 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(address) {
        return _super.call(this, address) || this;
    }
    Manager.prototype.display = function () {
        console.log(this.address);
    };
    return Manager;
}(Employee));
var manager = new Manager(employeeData);
manager.display();
var Account = /** @class */ (function () {
    function Account(Acc_no, Balance) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Date_of_opening = new Date();
    }
    Account.prototype.addCustomer = function () {
        console.log("added");
    };
    Account.prototype.removeCustomer = function () {
        console.log("removed");
    };
    return Account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(Acc_no, Balance, min_balance) {
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.min_balance = min_balance;
        return _this;
    }
    Saving_Account.prototype.debitAmount = function () {
        return 1000;
    };
    Saving_Account.prototype.CreditAmount = function () {
        return 2000;
    };
    Saving_Account.prototype.getBalance = function () {
        return this.Balance;
    };
    return Saving_Account;
}(Account));
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(Acc_no, Balance, Interest_rate) {
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.Interest_rate = Interest_rate;
        return _this;
    }
    Current_Account.prototype.debitAmount = function () {
        return 1000;
    };
    Current_Account.prototype.CreditAmount = function () {
        return 2000;
    };
    Current_Account.prototype.getBalance = function () {
        return this.Balance;
    };
    return Current_Account;
}(Account));
