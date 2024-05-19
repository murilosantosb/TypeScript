"use strict";
function person(user) {
    if (user.isWorking === true) {
        console.log(`O usuário ${user.name} está trabalhando`);
    }
    else {
        console.log(`O usuário ${user.name} com ${user.age} anos não está trabalhando`);
    }
}
person({ name: "Murilo", age: 17, isWorking: true });
person({ name: "Ana", age: 20, isWorking: false });
function showUserDetails(user) {
    if (user.role) {
        console.log(`O usuário é ${user.role}`);
    }
    else {
        console.log(`O email do usuário ${user.email}`);
    }
}
showUserDetails({ email: "murilo@gmail.com", role: "Admin" });
showUserDetails({ email: "bob@gmail.com" });
const fusca = {
    brand: "BMW",
    wheels: 4
};
console.log(fusca);
// fusca.wheels = 5
