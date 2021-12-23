const repeatString = function(text, numberOfTimes) {
    let display = '';
    if (numberOfTimes < 0){
        return "ERROR"
    }
    for(let i = 1; i<=numberOfTimes; i++){
         display += text;
    }
    return display;

};

// Do not edit below this line
module.exports = repeatString;
