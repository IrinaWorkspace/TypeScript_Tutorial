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
