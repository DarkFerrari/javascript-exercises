const removeFromArray = function(arrayList,...args) {

    
    newlist=arrayList;

        for(arg of args)
        {
            newlist = newlist.filter(num => num!==arg)
        }
       
       
    return newlist 
};

// Do not edit below this line
module.exports = removeFromArray;


//psuedocode
//1. take the array and the element to remove from array as an argument
//2. compare the array element with all the elements in array 
//3. remove the matched element index from the array using pop 
//4. return the leftover array or the manipulated array
