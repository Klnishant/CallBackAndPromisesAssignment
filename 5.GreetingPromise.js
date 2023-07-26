function greetPerson(name){
    return new Promise((resolve,reject)=>{
        if(typeof name==="string"){
            resolve(`Hello ${name}`);
        }
        else{
            reject("Invalid input Please provide Valid name");
        }
    });
}

const Name="Mithun";

greetPerson(Name).then(greeting => {console.log(greeting)}).catch(error => {
    console.log(error);
})