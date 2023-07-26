function ageInDays(person,logResult){
    const {fName,lName}=person;
    const full_name=fName+" "+lName;
    const {age}=person;
    const age_in_days=age*365;

    return logResult(full_name,age_in_days);
}

function logResult(name,age){
    console.log(`The persons full name is ${name} and their age is ${age} days`);
}

const personInfo = {
    fName: 'John',
    lName: 'Doe',
    age: 30
};

ageInDays(personInfo,logResult);