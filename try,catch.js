function sub() {
  const age = document.getElementById("age").value;
  try {
    const age2 = parseInt(age);
    if (isNaN(age2)) {
      throw "Please enter a valid number for age.";
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("This will always run.");
  }
}
