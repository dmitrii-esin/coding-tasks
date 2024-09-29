// The task is to parse strings of the following format:

// "11/20/2021 $400.40 Magnum (Health & Beauty)"
// "11/20/2024 $400.00 OtherStore (Sport)"

// Each string contains a date, amount, store name, and category separated by spaces.

// You need to write a method that takes a category and a date range (start date and end date) as input and returns the sum of all transactions for that category within the specified date range.

// Example 1:
// // Input:
// const transactions = [
//   "11/20/2021 $400.40 Magnum (Health & Beauty)",
//   "11/20/2024 $400.00 OtherStore (Sport)",
//   "12/01/2023 $200.00 MyStore (Electronics)",
//   "12/15/2023 $100.50 YourStore (Food)",
// ];

// transactions.forEach((transaction) => {
//   // const [date, price, name, category] = transaction;
//   const res = transaction.split("");

//   console.log("!!res", res);
// });

// const category = "Health & Beauty";
// const startDate = new Date("2021-11-20");
// const endDate = new Date("2023-12-15");

// // Output:
// 400.40

// Explanation:

// There is only one transaction in the given date range that belongs to the "Health & Beauty" category, and its amount is $400.40.

// Example 2:
// // Input:
// const transactions = [
//   "11/20/2021 $400.40 Magnum (Health & Beauty)",
//   "11/20/2024 $400.00 OtherStore (Sport)",
//   "12/01/2023 $200.00 MyStore (Electronics)",
//   "12/15/2023 $100.50 YourStore (Food)",
// ];

// const category = "Sport";
// const startDate = new Date("2021-11-20");
// const endDate = new Date("2023-12-15");

// // Output:
// 400.00

// Explanation:

// There is one transaction in the given date range that belongs to the "Sport" category, and its amount is $400.00.

// Example 3:
// // Input:
// const transactions = [
//   "11/20/2021 $400.40 Magnum (Health & Beauty)",
//   "11/20/2024 $400.00 OtherStore (Sport)",
//   "12/01/2023 $200.00 MyStore (Electronics)",
//   "12/15/2023 $100.50 YourStore (Food)",
// ];

// const category = "Electronics";
// const startDate = new Date("2021-11-20");
// const endDate = new Date("2023-12-15");

// // Output:
// 200.00

// Explanation:

// There is one transaction in the given date range that belongs to the "Electronics" category, and its amount is $200.00.

// Note:

// These examples do not provide solutions to the task. They are meant to illustrate the expected input and output format. You need to write the actual code to parse the strings and calculate the sum of transactions based on the given category and date range.

// ***

// Задача. На вход идут строки такого формата
// "11/20/2021 $400.40 Magnum (Health & Beauty)"
// "11/20/2024 $400.00 OtherStore (Sport)"
// То есть дата, сумма, магаз и категория
// Надо это дело распарсить и потом написть метод, который отдаст тебе сумму транзакций по категории и date range (от и до).

// ***

function calculateCategorySum(transactions, category, startDate, endDate) {
  let totalSum = 0;

  for (const transaction of transactions) {
    const [dateStr, amountStr, , categoryStr] = transaction.split(" ");

    // Parse the date
    const [month, day, year] = dateStr.split("/");
    const transactionDate = new Date(`${year}-${month}-${day}`);

    // Check if the transaction is within the date range and belongs to the specified category
    if (
      transactionDate >= startDate &&
      transactionDate <= endDate &&
      categoryStr.includes(category)
    ) {
      // Parse and add the amount to the total sum
      const amount = parseFloat(amountStr.slice(1)); // Remove the '$' and convert to a number
      totalSum += amount;
    }
  }

  return totalSum;
}

// Example usage:
const transactions = [
  "11/20/2021 $400.40 Magnum (Health & Beauty)",
  "11/20/2024 $400.00 OtherStore (Sport)",
  "12/01/2023 $200.00 MyStore (Electronics)",
  "12/15/2023 $100.50 YourStore (Food)",
];

const category = "Electronics";
const startDate = new Date("2021-11-20");
const endDate = new Date("2023-12-15");

const result = calculateCategorySum(transactions, category, startDate, endDate);
console.log(result); // Output: 200

// Explanation:

// calculateCategorySum function:

// Takes transactions, category, startDate, and endDate as input.
// Initializes totalSum to 0.
// Iterates through each transaction.
// Splits the transaction string into dateStr, amountStr, (unused store name), and categoryStr.
// Parses the dateStr into month, day, and year, and creates a transactionDate.
// Checks if transactionDate is within the startDate and endDate range, and if categoryStr includes the specified category.
// If the conditions are met, parses the amountStr (removing the '$') and adds it to totalSum.
// Finally, returns totalSum.
// Example usage:

// Defines transactions, category, startDate, and endDate.
// Calls calculateCategorySum with these values.
// Logs the result to the console.
// Key points:

// The code correctly parses the transaction strings, extracts the relevant information (date, amount, category), and performs the necessary filtering and calculation based on the given category and date range.
// It handles date parsing and comparison accurately.
// It demonstrates how to extract specific parts of a string using split and string slicing.
// The code is well-structured and easy to understand.
