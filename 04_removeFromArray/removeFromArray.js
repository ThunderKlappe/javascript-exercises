function removeFromArray(array, ...remove) {
    for (let i = 0; i < array.length; i++){
        for( let j = 0; j < remove.length; j++){
            if (remove[j] === array[i]){
                array.splice(i,1,"");
            }  
        }
    }
    array = array.filter(element => element);

    return array;

}

// Do not edit below this line
module.exports = removeFromArray;
