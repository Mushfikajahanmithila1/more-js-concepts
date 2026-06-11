// setInterval(() => {
//   console.log("hello world");
// }, 2000);
// clearInterval();

function twoParameter(a, b) {
  a = "";
  b = setTimeout(() => {
    console.log("");
  }, 2000);
  if (b >= 5000) {
    clearInterval(b);
  }
}

twoParameter("hello", 6);
