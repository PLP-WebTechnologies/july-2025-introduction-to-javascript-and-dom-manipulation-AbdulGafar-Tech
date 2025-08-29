// Part 1: Basics
// ===============================
document.getElementById("checkAgeBtn").addEventListener("click", function () {
    let age = document.getElementById("userAge").value;
    let result = "";
  
    if (age >= 18) {
      result = "You are an adult!";
    } else if (age > 0) {
      result = "You are still young!";
    } else {
      result = "Please enter a valid age.";
    }
  
    document.getElementById("ageResult").textContent = result;
  });
  

  // Part 2: Functions

  function calculateTotal(a, b) {
    return a + b;
  }
  
  function formatString(str) {
    return str.toUpperCase();
  }
  
  document.getElementById("totalBtn").addEventListener("click", function () {
    let total = calculateTotal(100, 250);
    document.getElementById("totalResult").textContent =
      "Total is: " + total + " | Formatted: " + formatString("hello world");
  });
  

  // Part 3: Loops

  document.getElementById("countBtn").addEventListener("click", function () {
    let list = document.getElementById("countList");
    list.innerHTML = ""; // clear previous list
  
    // for loop countdown
    for (let i = 5; i >= 1; i--) {
      let li = document.createElement("li");
      li.textContent = "Countdown: " + i;
      list.appendChild(li);
    }
  
    // while loop example
    let i = 1;
    while (i <= 3) {
      let li = document.createElement("li");
      li.textContent = "While loop count: " + i;
      list.appendChild(li);
      i++;
    }
  });
  

  //  Part 4: DOM Manipulation

  document.getElementById("toggleBtn").addEventListener("click", function () {
    let domText = document.getElementById("domText");
  
    // Toggle highlight class
    domText.classList.toggle("highlight");
  
    // Change text content
    if (domText.classList.contains("highlight")) {
      domText.textContent = "🌟 Highlighted text!";
    } else {
      domText.textContent = "This text will change dynamically!";
    }
  });