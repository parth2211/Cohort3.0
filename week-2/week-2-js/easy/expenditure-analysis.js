/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

class Category {
  constructor(category, totalSpent) {
    this.category = category;
    this.totalSpent = totalSpent;
  }
}

function calculateTotalSpentByCategory(transactions) {
  let map = new Map();
  let size = transactions.length;
  for(let i=0; i<size; i++) {
    let catgry = transactions[i].category;
    if(map.get(catgry) == null) {
      map.set(catgry, transactions[i].price);
    }
    else {
      let currPrice = transactions[i].price;
      map.set(catgry, map.get(catgry) + currPrice);
    }
  }
  let categoryObj = [];
  map.forEach((value,key) => {
    let obj = new Category(key, value);
    categoryObj.push(obj);
  })
  
  return categoryObj;
}

module.exports = calculateTotalSpentByCategory;
