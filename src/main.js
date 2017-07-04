
class shoppingcart {
	
	constructor (itemName, quantity, price)
	{
	this.itemName = itemName;
	this.quantity = quantity;
	this.price = price;
	//this.total = total;
	let total = quantity * price;
	}

	toString () 
	{
	return 'Your Reciept: item:' ${this.item} '|Quantity: '${this.quantity}'| Price: '${this.price}' | Total: '${total}
	}

	print ()
	{
		console.log( this.toString() );
	}

	calcTotal ()
	{
		total = quantity * price;
	}

	
	
	
}

class shop extends shoppingcart {

	// constructor(quantity)
	// {
	// 	this.quantity = quantity;
	// 	quantity = 100
	// }

	removeItem()
	{

		quantity --
	}

}

class customer extends shoppingcart {

	constructor(balance, cashPaid)
	{
		this.balance = balance;
		this.cashPaid = cashPaid;
		balance = 0
	}
	
	checkout()

	{	
		if (cashPaid < total)
		{
			return "Cash paid not enough";
		}

		balance = cashPaid - total;
		return balance;
	}
}

const bunmi = new shoppingcart('rice', 1, 200);
bunmi.print();
console.log(bunmi.calcTotal);