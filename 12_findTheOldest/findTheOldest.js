const findTheOldest = function(people) {
    return people.reduce((a,b) => {
        if (!a.yearOfDeath){
            a.yearOfDeath = new Date().getFullYear();
        }
        if (!b.yearOfDeath){
            b.yearOfDeath = new Date().getFullYear();
        }
        let oldest;
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth){
            oldest = a;
        }else{
            oldest = b;
        }
        return oldest;
    }, {})

};

// Do not edit below this line
module.exports = findTheOldest;
