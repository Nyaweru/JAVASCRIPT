//use if to specify a block of code to be executed if the condition is true
// use else to specify block of code to be executed if the same condition is false
// use else if to specify a new condition to test id the first statement is false
//use switch to specify many alternative blocks of code
/*let bill = 200;

if (bill >= 200) {
    let discount = bill * 0.05;
    let finalAmount = bill - discount;
    console.log(`Bill is ${bill} sh. You get a 5% discount of ${discount} sh. Final amount to pay: ${finalAmount} sh.`);

}
    */
 let bill = 100;
 let discount  = bill *0.05;
  if (bill <= 300) { 
  //let discount  = bill *0.05;
  let finalAmount = bill- discount;
  console.log(`Bill is ${bill} sh. you get a 5% discount of ${discount}sh. Final amount to pay :${finalAmount}  sh.`);
   } else
    discount = bill *0.10;
    let finalAmount = bill -discount;
     {
  console.log (`Bill is ${bill}sh. You get a 10% discount of ${discount}sh. Final amount to pay :${finalAmount}sh.`)  
  }

  let bill2 = 100;
  let discount1;
  let finalAmount1;
  
  if (bill2 < 200) {
      discount = 0;
      finalAmount = bill2;
      console.log(`Bill is ${bill2} sh. No discount applied. Final amount to pay: ${finalAmount} sh.`);
  } else if (bill2 <= 300) { 
      discount = bill2 * 0.05;
      finalAmount = bill2 - discount;
      console.log(`Bill is ${bill2} sh. You get a 5% discount of ${discount} sh. Final amount to pay: ${finalAmount} sh.`);
  } else {
      discount = bill2 * 0.10;
      finalAmount = bill2 - discount;
      console.log(`Bill is ${bill2} sh. You get a 10% discount of ${discount} sh. Final amount to pay: ${finalAmount} sh.`);
  }
  