function doubler(number){
    number <= 50 ? console.log(number) : "";

    number <= 50 ? doubler(number * 2) : "";

}

doubler(5);