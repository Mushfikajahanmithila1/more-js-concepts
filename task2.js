// Function to display jokes every 2 seconds and stop after 10 seconds
function jokeTimer() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What did the ocean say to the beach? Nothing, it just waved!",
  ];

  let jokeIndex = 0;

  // Display a joke every 2 seconds
  const jokeInterval = setInterval(() => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log(`😄 ${randomJoke}`);
    jokeIndex++;
  }, 2000);

  // Stop after 10 seconds
  setTimeout(() => {
    clearInterval(jokeInterval);
    console.log("⏹️ Time's up! No more jokes!");
  }, 10000);
}

// Call the function
jokeTimer();
