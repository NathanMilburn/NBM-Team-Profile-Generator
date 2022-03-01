let Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.officeNumber = officeNumber;
        this.email = email;
        this.role = "Manager";
    }
}

module.exports = Manager