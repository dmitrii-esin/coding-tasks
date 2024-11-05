// @ts-nocheck

// Task description:

// This kata is about shopping calculation. There are products, product's prices, customers and customer's total money.

// This kata takes an input as List of string, and this list contains statements which give information about product name, product price, customer name and customer budget.

// These statements can have 3 basic form like; (is, has, buys)
//   "Apple is $5."
//   "Alice has $26."
//   "Alice buys 2 apples."
// Your task is to write a function that calculates the result which is [(string,string,string)] and holds [(Customer Name, Customer Total Money, Bought Products)]

// "is" statement gives info about product name and its price.
// "has" statement gives info about customer name and his/her money.
// "buys" statement gives info about customer name, bought product name and bought product count.
// You need to split bought products by comma and space(", ") like "2 apples, 5 oranges, 1 grape"

// For Example:
//   input => [ "Apple is $5.",
//              "Banana is $7.",
//              "Orange is $2.",
//              "Alice has $26.",
//              "John has $41.",
//              "Alice buys 2 apples.",
//              "John buys 1 banana.",
//              "Alice buys 5 oranges." ]
// Alice has $26 and buys 2 apples, 5 oranges for $20 (2 * 5 + 5 * 2), she keeps $6.

// John has $41 and buys 1 banana for $7 (1 * 7), he keeps $34.

// So output => [ ("Alice", "$6", "2 apples, 5 oranges"),
//                ("John", "$34", "1 banana") ]
// The order of statements is not guaranteed. As an example: you could receive a buy statement before knowing the cost of the product.

// For Example:
//   input => [ "John has $41.",
//              "Apple is $5.",
//              "Alice buys 2 apples.",
//              "Alice has $26.",
//              "John buys 1 banana.",
//              "Alice buys 5 oranges.",
//              "Banana is $7.",
//              "Orange is $2." ]
// Notes:

// Currency is always preceded by the $ symbol.
// Output must be ordered by the placement of customers in the input list.
// Products must be ordered by the order in which they were bought by that customer.
// All input statements will be valid. No need to check for invalid statements.
// Customers will always have enough money for their purchases. No need to validate for negative balances.
// Inputs guarantee that the same customer will not perform multiple purchases for the same product.
// Just use -s as plural suffix.

// Solution:

function shoppingCalculation(input) {
  function extractPriceFromIsString(str) {
    const matches = str.match(/is \$(\d+)/); // Matches "has $" followed by digits
    return matches ? Number(matches[1]) : null; // Extract the captured group
  }

  function extractBudgetFromHasString(str) {
    const matches = str.match(/has \$(\d+)/); // Matches "has $" followed by digits
    return matches ? Number(matches[1]) : null; // Extract the captured group
  }

  function extractNameFromIsHasBuysString(str) {
    const words = str.split(" ");
    return words[0].toLowerCase();
  }

  // function extractProductNameFromBuysString(str) {
  //   const words = str.trim().split(" ");
  //   return words[words.length - 1]
  //     .replaceAll("s", "")
  //     .replaceAll(".", "")
  //     .toLowerCase();
  // }

  function extractProductNameFromBuysString(str) {
    const words = str.trim().split(" ");
    const product = words[words.length - 1].replace(".", "").toLowerCase();

    // Strip the possible 's' at the end for plural
    if (product.endsWith("s")) {
      return product.slice(0, -1);
    }
    return product;
  }

  function extractCountfromBuysString(str) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const products = new Map();
  const buys = new Map();
  const budgets = new Map();

  input.forEach((item) => {
    if (item.includes(" is ")) {
      products.set(
        extractNameFromIsHasBuysString(item),
        extractPriceFromIsString(item)
      );
    } else if (item.includes(" has ")) {
      budgets.set(
        extractNameFromIsHasBuysString(item),
        extractBudgetFromHasString(item)
      );
    } else if (item.includes(" buys ")) {
      const name = extractNameFromIsHasBuysString(item);
      const count = extractCountfromBuysString(item);
      const product = extractProductNameFromBuysString(item);

      const currentValue = buys?.get(name)?.has(product)
        ? buys.get(name).get(product)
        : 0;
      const currentBuyer = buys?.has(name) ? buys.get(name) : new Map();

      buys.set(name, currentBuyer.set(product, currentValue + count));
    }
  });

  const ans = [];

  buys.forEach((purchases, person) => {
    const name = capitalize(person);
    const acc = [person, budgets.get(person)];

    purchases.forEach((count, purchase) => {
      acc[1] = !products.has(purchase)
        ? NaN
        : acc[1] - products.get(purchase) * count;
      const newPuchaseName = count > 1 ? `${purchase}s` : purchase;
      acc.push(`${count} ${newPuchaseName}`);
    });

    //@ts-ignore
    ans.push(acc);
  });

  //normalize ans;
  const normalizedAns = ans.map((personData) => {
    const [name, balance, ...rest] = personData;

    return [capitalize(name), `$${balance}`, rest.join(", ")];
  });

  const budgetKeys = Array.from(budgets.keys());

  // Sort the data array based on the order of keys in the budgets Map
  normalizedAns.sort((a, b) => {
    const aIndex = budgetKeys.indexOf(a[0].toLowerCase());
    const bIndex = budgetKeys.indexOf(b[0].toLowerCase());
    return aIndex - bIndex;
  });

  return normalizedAns;
}

//lets pretend this is a cool DB
// let PRODUCTS_DB = {};
// let CUSTOMERS_DB = {};

// // we are going to assume that input is standardized through a type
// // and doesnt need extra code bloat to make sure the input is valid
// function shoppingCalculation(input) {
//   //products & prices
//   //customers balances & shopping carts

//   let output;

//   // forEach
//   // switch operation for each case & function call
//   input.forEach((financialTransaction) => {
//     let transactionParts = financialTransaction.split(" ");
//     let command = transactionParts[1]; // buys, is, has
//     let amount = transactionParts[2]; // currency or amount

//     //console.log("Command:", command);
//     //console.log("Amount:", amount);
//     switch(command) {
//         case "is":
//           //console.log("is", transactionParts[0], transactionParts[2]);
//           let product; // string
//           let price; // number

//           product = transactionParts[0].toLowerCase();

//           price = Number(transactionParts[2].replace(/\D/g, ""));

//           console.log("is", product, typeof price, price);

//           // extract product
//           // extract price

//           setProductPrice(product, price); // string, number

//           break;
//         case "has":
//           //console.log("has", transactionParts[0], transactionParts[2]);
//           let customer; // string
//           let balance; // number

//           customer = transactionParts[0].toLowerCase();

//           balance = Number(transactionParts[2].replace(/\D/g, ""));

//           console.log("has", customer, balance, typeof balance);

//           setCustomerBudget(customer, balance, transactionParts[0]);

//           break;
//         case "buys":
//           console.log("buys", transactionParts[2], transactionParts[3]);

//           let customer2; // string
//           let qty; // string
//           let item; // number

//           customer2 = transactionParts[0].toLowerCase();

//           qty = Number(transactionParts[2]);

//           item = transactionParts[3];
//           item = qty == 1 ? item.replace(/.$/g, "") : item.replace(/s.$/g, "");

//           console.log(typeof qty, qty, item);

//           customerPurchase(customer2, item, qty);

//           break;
//     }
//     console.log("=============");
//   });

//   console.log(PRODUCTS_DB);
//   console.log(CUSTOMERS_DB);

//   output = financialModel(CUSTOMERS_DB, PRODUCTS_DB);
//   console.log("/////////////////////////////");
//   console.log (output);
//   PRODUCTS_DB = {};
//   CUSTOMERS_DB = {};

//   return output;

// }

// // COMMANDS
// // these would usually be imported into this script

// // is command
// function setProductPrice(product, price) {
//   PRODUCTS_DB[product] = price;
// }

// // has command
// function setCustomerBudget(customer, budget, customerName) {
//   CUSTOMERS_DB[customer] = {
//     name: customerName,
//     balance: budget,
//     shopping_cart: []
//   };
// }

// // buys command
// function customerPurchase(customer, item, quantity) {
//   CUSTOMERS_DB[customer].shopping_cart.push(`${quantity} ${quantity > 1 ? item + "s" : item}`);

//   CUSTOMERS_DB[customer].balance -= (PRODUCTS_DB[item] * quantity);
// }

// function financialModel(customers, products) {
//   let export_data = [];

//   Object.keys(customers).forEach(function(customer) {
//     customer = customers[customer];
//     export_data.push([
//       `${customer.name}`,
//       `$${customer.balance}`,
//       `${customer.shopping_cart.join(", ")}`
//     ]);
//   });

//   return export_data;
// }

// Test casess:

const input1 = [
  "Apple is $5.",
  "Banana is $7.",
  "Orange is $2.",
  "Alice has $26.",
  "John has $41.",
  "Alice buys 2 apples.",
  "John buys 1 banana.",
  "Alice buys 5 oranges.",
];

const input2 = [
  "Apple is $5.",
  "Banana is $7.",
  "Orange is $2.",
  "Lisa has $26.",
  "Arthas has $41.",
  "Lisa buys 2 apples.",
  "Arthas buys 1 banana.",
  "Lisa buys 5 oranges.",
];

const input3 = [
  "Carrot is $1.",
  "Jim has $10.",
  "Lemon is $2.",
  "Steve has $80.",
  "Steve buys 7 carrots.",
  "Jim buys 2 lemons.",
];

const input4 = [
  "Playstation is $7.",
  "Chandler has $9190.",
  "Orange is $10.",
  "Carrot is $7.",
  "Marcel has $9636.",
  "Egg is $3.",
  "Phoebe has $9990.",
  "Monica has $9295.",
  "Banana is $6.",
  "Table is $8.",
  "Ross has $9614.",
  "Gunther has $9395.",
  "Phoebe buys 3 oranges.",
  "Ross buys 6 playstations.",
  "Chandler buys 3 eggs.",
  "Marcel buys 1 table.",
  "Gunther buys 5 bananas.",
  "Monica buys 2 carrots.",
];

const input5 = [
  "Apple is $13.",
  "Monica has $9000.",
  "Phoebe has $9923.",
  "Playstation is $16.",
  "Ross has $9550.",
  "Chandler has $9886.",
  "Janice has $9397.",
  "Carrot is $8.",
  "Lemon is $11.",
  "Egg is $8.",
  "Janice buys 3 lemons.",
  "Monica buys 7 eggs.",
  "Chandler buys 6 carrots.",
  "Phoebe buys 9 playstations.",
  "Ross buys 2 apples.",
];

console.log("!!shoppingCalculation(input1)", shoppingCalculation(input1));
// output: [
// ["Alice", "$6", "2 apples, 5 oranges"],
// ["John", "$34", "1 banana"] ,
// ]

console.log("!!shoppingCalculation(input2)", shoppingCalculation(input2));
// output: [
//   ["Lisa", "$6", "2 apples, 5 oranges"],
//   ["Arthas", "$34", "1 banana"],
// ];

console.log("!!shoppingCalculation(input3)", shoppingCalculation(input3));
// output: [
//   ["Jim", "$6", "2 lemons"],
//   ["Steve", "$73", "7 carrots"],
// ];

console.log("!!shoppingCalculation(input4)", shoppingCalculation(input4));
// output: [
//   ["Chandler", "$9181", "3 eggs"],
//   ["Marcel", "$9628", "1 table"],
//   ["Phoebe", "$9960", "3 oranges"],
//   ["Monica", "$9281", "2 carrots"],
//   ["Ross", "$NaN", "6 playtations"],
//   ["Gunther", "$9365", "5 bananas"],
// ];

console.log("!!shoppingCalculation(input5)", shoppingCalculation(input5));
// output: [
// [ 'Monica', '$8944', '7 eggs' ],
//  [ 'Phoebe', '$NaN', '9 playtations' ],
//  [ 'Ross', '$9524', '2 apples' ],
//  [ 'Chandler', '$9838', '6 carrots' ],
//  [ 'Janice', '$9364', '3 lemons' ]
// ]
