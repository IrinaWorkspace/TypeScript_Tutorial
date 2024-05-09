// let sales: number = 123_456_789;

// let course: string = "TypeScript";

// let is_published: boolean = true;

// let sales: 123_456_789;

// let course: "TypeScript";

// let is_published: boolean = true;

// let other;
// other = 1;
// other = "a";

// function render(document) {
//   console.log(document);
// }

// solving the problem:

// function render(document:any) {
//     console.log(document);
//   }

// or go to tsconfig and :
//   /* Type Checking */
// "strict": true /*
// "noImplicitAny": false,

//let numbers = [1,2,'3']; // JS

//let numbers: number[] = [1,2,'3']; //TS
//let numbers: number[] = [1, 2, 3]; //TS  === let numbers:  [1, 2, 3];

//1, Irina

// let user: [number, string] = [1, "Irina"];
// // let user2: [number, string] = [1, 'Irina', 2];

// user.push(1); //bug in TS.

// const small = 1;
// const medium = 2;
// const large = 3;

//explanation of enum: https://youtu.be/d56mG7DezGs?t=2076
// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// // Medium will be 2, Large will be 3. But if they are a strings- they should have values.
// let mySize: Size = Size.Medium;
// console.log(mySize);
// // to view in the console:
// //tsc
// // dist/index.js
// !important- if we define the enum as constant ( const enum)- the code into the JS file will be optimized.

//explanation of noneUnusedParams

// Functions: https://youtu.be/d56mG7DezGs?t=2276
// "noUnusedParameters": true, explanation
// function calculateTax(income: number): number {
//   // test one, this explain, that income is declared, but never used:
//   // return 0;

//   //test two, this explain, that  : number is "Function lacks ending return statement and return type does not include 'undefined'."
// //   if (income < 500) {
// //     return income * 1.2;
// //   }
// }

// function calculateTax(income: number, ) {
//   // let x; // this (unused variables) is prevent from // "noUnusedLocals": true,

//   // test three- "noImplicitReturns": true,   explanation:
//   if (income < 500) return income * 1.2;
//   //there is a bug- this will return undefined, if income is > then 500
//   // Not all code paths return a value.ts(7030) warning for calculateTax:
//   return income * 1.3;

//   //But it is very important ot always return value
//  }

function calculateTax(income: number, taxYear = 2022): number {
  // ? make the argument optional
  // 2 option to avoid:
  //01. taxYear? + (taxYear || 2022)
  //02. taxYear=2022 + (taxYear < 2022)
  if ((taxYear || 2022) < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_0000, 2022);
