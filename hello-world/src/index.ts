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
enum Size {
  Small = 1,
  Medium,
  Large,
}
// Medium will be 2, Large will be 3. But if they are a strings- they should have values.
