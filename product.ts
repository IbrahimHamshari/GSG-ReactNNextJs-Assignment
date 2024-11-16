// Task 4
interface Product {
  name: string;
  price: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

// Task 5
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/*
  Typescript works by checking the types at the compile time, and then compile it to js code to be able to run it.

  To compile it to js, we use :
  tsc product.ts

  then we can run it using:
  node product.js
*/
