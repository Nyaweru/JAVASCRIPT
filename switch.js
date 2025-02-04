// switch perfoms different actions based on conditions
let bill2 = 1000;
let discount;
let finalAmount;

switch (true) {
    case (bill2 < 200):
        discount = 0;
        finalAmount = bill2;
        console.log(`Bill is ${bill2} sh. No discount applied. Final amount to pay: ${finalAmount} sh.`);
        break;

    case (bill2 <= 300):
        discount = bill2 * 0.05;
        finalAmount = bill2 - discount;
        console.log(`Bill is ${bill2} sh. You get a 5% discount of ${discount} sh. Final amount to pay: ${finalAmount} sh.`);
        break;

    default:
        discount = bill2 * 0.10;
        finalAmount = bill2 - discount;
        console.log(`Bill is ${bill2} sh. You get a 10% discount of ${discount} sh. Final amount to pay: ${finalAmount} sh.`);
}

let fruit = "pineapple";
switch (fruit) {
    case "banana":
        console.log("It's a banana.");
        break;
    case "apple":
        console.log("It's an apple.");
        break;
         case "pineapple":
            console.log("it's a pineapple");
            break;
            default :
            console.log("it is  a dragon fruit");
}


let grade1 = "71";
switch (grade1){
    case "80":
        console.log("excellent");
        break;
    case "70":
        console.log("good");
        break;

    case "60":
        console.log("fair");
        break;
     default:
        console.log("you tried");

}

let grade = "78";
switch (true){
    case (grade >= 85):
        console.log("grade A");
        break;
        case (grade  >=75):
            console.log("grade B");
            break;

            case (grade  >= 60):
            console.log("grade is C");
            break;
            default:
                console.log("grade D");

}

 