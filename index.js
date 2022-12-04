// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

const cloneEmployee = {...employee};

function updateEmployeeWithKeyAndValue (employee, name, value){
    employee.name = "Sam";
    return cloneEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey (employee, key, value){
    const newEmployee = {...cloneEmployee};
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey (employee, key, value){
    employee[key] = value;
    return employee;
};
