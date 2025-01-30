# ModifiedScrimbaJSTutorial-forked-
Created with CodeSandbox
This project is from scrimba.com, and it's in the Learn HTML and CSS tutorial. I am an Exploring CS teacher, and this may be somewhat out of the scope of what we learn, but I thought it was a good transition from HTML and CSS
My students were working from in scrimba.com and copying copying code into CodeSandbox. I started running into some problems when I added the increment button (basically a counter), and was not able to get it to work. I was getting an "increment not defined" button.

I used ChatGPT to help me figure out why this was happening. I was seeing that in Scrimba, the line in the html for button ID was: 
<button id="increment-btn" onclick="increment()">INCREMENT</button>

ChatGPT suggested that I just use <button id="increment-btn">INCREMENT</button> in the html
and also suggested that in the first three lines of the js file I use:

document.addEventListener("DOMContentLoaded", function () {
  let countEl = document.getElementById("count-el");
  let incrementBtn = document.getElementById("increment-btn");

  In any case, this did work for me. I don't know if the code in Scrimba was actually wrong, but using addEventListener seemed to work better for me
  document.getElementById("increment-btn").addEventListener("click", increment);
