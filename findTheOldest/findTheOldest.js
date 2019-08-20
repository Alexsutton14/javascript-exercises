function calculateAge(person){
    let tempDeathYear = new Date().getFullYear();
    console.log(`Current year is ${tempDeathYear}`);
    if("yearOfDeath" in person){
        tempDeathYear = person.yearOfDeath;
    }
    let age = tempDeathYear - person.yearOfBirth;
    return age;
}
let findTheOldest = function(people) {
    let currentOldest;
    let currentOldestAge = 0;
    people.forEach(element => {
        element.age = calculateAge(element);
    });
    people.forEach(element =>{
        if(element.age > currentOldestAge){
            currentOldestAge = element.age;
            currentOldest = element;
        }
    })
    return currentOldest;
}
module.exports = findTheOldest
