console.log(1);
console.log(2);
console.log(3);
// setTimeout(() => {
//   console.log("lazy logged");
// }, 2000);
console.log(5);
console.log(6);
console.log(7);

let num = 0;
setInterval(() => {
  if (num >= 20) {
    clearInterval();
  }
  num += 1;
  console.log(num);
}, 2000);
