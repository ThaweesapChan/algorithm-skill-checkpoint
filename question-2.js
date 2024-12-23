function findProductPrice(products, name) {
  // Your code here
  let left = 0;
  let right = products.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midName = products[mid].name;

      if (midName === name) {
          return products[mid].price;
      } else if (midName != name) {
        //console.log("นี่จร้าาา----:",midName, name);
          left = mid + 1; 
          //console.log("left:",left);
      } else {
          right = mid - 1; 
          //console.log("right:",right);
      }
  }

  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
