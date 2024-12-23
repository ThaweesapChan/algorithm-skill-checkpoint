function sortProductsByPrice(products) {
  // Your code here
  let n = products.length; 
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
          if (products[j].price > products[j + 1].price) {
              let memeryValue = products[j];
              console.log("\nmemeryValue:",memeryValue);
              products[j] = products[j + 1];
              console.log("\nเจ:",products[j]);  
              products[j + 1] = memeryValue;
              console.log("\nไอ+1:",products[j + 1]);
              //ฉลาดจัดไอแบงค์เอ๊ยยยย
          }
      }
  }
  return products; 
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
