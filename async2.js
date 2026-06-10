const myLoder = () => {
  new Promise((resolve, reject) => {
    const success = Math.random();
    if (success > 0.5) {
      resolve("Success!");
    } else {
      reject("Failure!");
    }
  });
};

myLoder()
  .then((data) => {
    console.log("resolve value is: ", data);
  })
  .catch((error) => {
    console.error("reject value is: ", error);
  });
