document.addEventListener("DOMContentLoaded", function () {
  let countEl = document.getElementById("count-el");
  let incrementBtn = document.getElementById("increment-btn");

  let count = 0;

  function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count);
  }

  // Attach event listener to the button
  incrementBtn.addEventListener("click", increment);

  console.log("JavaScript loaded and event listener added.");
});
