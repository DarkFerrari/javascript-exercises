const reverseString = function(string) {
    //let string = "hello";
    //if (string=="") return "ERROR";
    let splitString = string.split("");
    
    let reversedString=""
    let length = splitString.length;
    for(i=0;i<length;i++){
        reversedString += splitString.pop()
    }
    return reversedString;
};

//reverseString();


// Do not edit below this line
module.exports = reverseString;


//Psuedocode: 
//1.take the input string
//2. split it using the split operator, this will assign in an array
//3. In a loop, take length-1 and join with length-2 and put it in a string
//4. Output the reversed string in a different file 