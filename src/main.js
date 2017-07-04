"use strict";
class shoppingcart {
    constructor (itemName, quantity, price){
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
        this.total = this.quantity * this.price;
    }// end of constructor function
    printReceipt () {

    return 'Your Reciept: item: ${this.itemName} |Quantity: ${this.quantity}  Price: ${this.price} | Total: ${this.total}';

    }//end of function toString
    print (){
        console.log( printReceipt() );
    }//end of function print
    calcTotal (){
        return this.total;
    }//end of function calcTotal
    
}//end of class shoppingcart
class shop extends shoppingcart {
     constructor(quantity){
        super(quantity);
        super.this.quantity = 100
    }//end of constructor
    removeItem(){
        this.quantity = this.quantity --
    }//end of function removeItem
}//end of subclass shop
class customer extends shoppingcart {
    constructor(balance, cashPaid){
        this.balance = balance;
        this.cashPaid = cashPaid;
        this.balance = 0
    }//end of constructor function
  
    checkout(){    
        if (this.cashPaid < super.this.total){
            return "Cash paid not enough";
        }//end of if statement
        this.balance = this.cashPaid - super.this.total;
        return this.balance;
    }//end of function checkout
}//end of subcalss customer
const bunmi = new shoppingcart(`Rice`, 2, 200);
console.log(bunmi.printReceipt());
console.log(bunmi.calcTotal());
