function fizzBuzz(){
    let checkingForOutPut = function(number){
        if(number>100){
            return "Please make sure your number is 100 or less than";
        }
        if (number%3===0&&number%5===0){
            return "FizzBuzz";
        }
        if (number%3===0){
            return "Fizz";
        }
        if(number%5===0){
            return "Buzz";
        }
        return number;
    };
    return {
        returnedData: checkingForOutPut
    };
}