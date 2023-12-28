class User {
    constructor(name) {
      this._name = name;
    } 
    name() {
      return this._name;
    }
    email() {
      return this.name() + "@example.com";
    }
    viewData() {
      console.log(`Name: ${this.name()} Email: ${this.email()}`);
    }
}

let student = new User("Akash");
let student1 = new User("Anushka");
let student2 = new User("Rajeev");


class Admin extends User {
    editData() {
        console.log('Editing data');
    }
}

let admin = new Admin("Admin");
