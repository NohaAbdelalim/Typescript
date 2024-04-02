//1-	Create array that accept  number only 
let arr:number[];
//2-	Create array that accept string and number only and print all items
let arr1:(string|number)[];
arr1=["a",1,5,"b"];
console.log(arr1);
//3-	Create a variable that accept number and Boolean only 
let y:number|boolean;
y=true
y=2
//4-	Create function with two parameter try to call it without any parameter “handling”
function myfun(x1?:number,x2?:number):any{

    if(x1==undefined&&x2!=undefined)return x2 
    else if(x2==undefined&&x1!=undefined)return x1 
    else if(x1!=undefined&&x2!=undefined)return x1+x2
    return ;
}
myfun();


//5-	Create class Employee implement IEmployee using this object as implementation
//  {"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz","address": {"street": "Kulas Light","suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3874","geo": {"lat": "-37.3159","lng": "81.1496"}}

interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

class Employee implements IEmployee {
    id: number;
    name: string;
    email: string;
  public address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };

    private _username: string; 

    constructor(employeeData: IEmployee) {
        this.id = employeeData.id;
        this.name = employeeData.name;
        this._username = employeeData.username;
        this.email = employeeData.email;
        this.address = employeeData.address;
    }

    get username(): string {
        return this._username;
    }
    Getaddress() {
        return this.address;
    }
}


const employeeData: IEmployee = {
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

const emp = new Employee(employeeData);
console.log(emp);


//6-	Create class manager inherit from employee class and 
class Manager extends Employee{
    constructor(address){
        super(address);
       
    }
    public display(): void {
        console.log( this.address); 
    }
}

const manager = new Manager(employeeData);

manager.display();



// 7-	Implement the following diagram 
interface IAccount {
    Date_of_opening: Date;
    addCustomer: () => void;
    removeCustomer: () => void;
}

abstract class Account implements IAccount {
    Acc_no: number;
    Balance: number;
    Date_of_opening: Date;

    constructor(Acc_no: number, Balance: number) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Date_of_opening = new Date();
    }

    addCustomer(): void {
        console.log("added");
    }

    removeCustomer(): void {
        console.log("removed");
    }

    abstract debitAmount(): number;
    abstract CreditAmount(): number;
    abstract getBalance(): number;
}

class Saving_Account extends Account {
    min_balance: number;
   
    constructor(Acc_no: number, Balance: number, min_balance: number) {
        super(Acc_no, Balance);
        this.min_balance = min_balance;
       
    }

    debitAmount(): number {
        return 1000;
    }

    CreditAmount(): number {
        return 2000;
    }

    getBalance(): number {
        return this.Balance;
    }
}

class Current_Account extends Account {
    min_balance: number;
    Interest_rate: number;

    constructor(Acc_no: number, Balance: number, Interest_rate: number) {
        super(Acc_no, Balance);
        this.Interest_rate = Interest_rate;
       
    }

    debitAmount(): number {
        return 1000;
    }

    CreditAmount(): number {
        return 2000;
    }

    getBalance(): number {
        return this.Balance;
    }
}
