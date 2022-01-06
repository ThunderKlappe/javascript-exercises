const fibonacci = function(input) {

    if (input <0){
        return "OOPS"
    }

    //set firstvariable to 1
    let firstNo = 1;
    //set secondvariable to 0
    let secNo = 0;
    //set fibnumber to 1
    let fibNo = 1;
    
    //loop up to input
    for(let i = 1; i < Number(input); i++){
    //add first and second into fibno
    fibNo = firstNo + secNo;
    //set second to first
    secNo = firstNo;
    //set first to fibno
    firstNo = fibNo;
    }
    return fibNo;

};

// Do not edit below this line
module.exports = fibonacci;
