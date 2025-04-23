const sumAll = function( startAdd, finishAdd) {

    sum=0;

    // startAdd = Number(startAdd);
    // finishAdd = Number(finishAdd);

    // let largerNum = 0
    // let smallerNum = 0

    if (!Number.isInteger(startAdd) || !Number.isInteger(finishAdd) || startAdd<0 || finishAdd<0)
        {
            return "ERROR";
        }
    else if(startAdd>finishAdd) 
        {
        largerNum = startAdd;
        smallerNum = finishAdd;
        }
    else
        {
        largerNum = finishAdd;
        smallerNum = startAdd;
        }

    for(i=smallerNum;i<=largerNum;i++)
        {
            sum += i;
        }

    return sum;

};

//console.log(sumAll(1,4))
// Do not edit below this line
module.exports = sumAll;

//1.take two integers as start and finish
//2.loop from initialization of start number and finish until the finish number
// provide the output