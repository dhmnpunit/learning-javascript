/*  SWITCH
    can be efficinet replacement to many else if statements 


*/

let day = 5;

without using switch 

if(day == 1) {
    console.log(`It is Monday`);
} else if(day == 2) {
    console.log(`It is Tuesday`);
} else if(day == 3) {
    console.log(`It is Wednesday`);
} else if(day == 4) {
    console.log(`It is Thursday`);
} else if(day == 5) {
    console.log(`It is Friday`);
} else if(day == 6) {
    console.log(`It is Saturday`);
} else if(day == 7) {
    console.log(`It is Sunday`);
} else {
    console.log(`${day} is not a day.`)
}



with using switch

switch (day) {
    case 1:
        console.log(`It is Monday`);
        break;
    case 2:
        console.log(`It is Tuesday`);
        break;
    case 3:
        console.log(`It is Wednesday`);
        break;
    case 4:
        console.log(`It is Thursday`);
        break;
    case 5:
        console.log(`It is Friday`);
        break;
    case 6:
        console.log(`It is Saturday`);
        break;
    case 7:
        console.log(`It is Sunday`);
        break;
    default:
        console.log(`${day} is not a day`)
        break;
}




let testScore = 34;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);
