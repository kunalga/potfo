// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}
// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}
// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}




// Get the <pre> element
const preTag = document.getElementById("myPreTag");

// Create a copy button element
const copyButton = document.createElement("span");
copyButton.innerText = "Copy";
copyButton.classList.add("copy-button");

// Append the copy button to the <pre> tag
preTag.appendChild(copyButton);

// Add click event listener to the copy button
copyButton.addEventListener("click", () => {
  // Hide the copy button temporarily
  copyButton.style.display = "none";

  // Create a range and select the text inside the <pre> tag
  const range = document.createRange();
  range.selectNode(preTag);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Alert the user that the text has been copied
    copyButton.innerText = "Copied!";
    setTimeout(function(){
      copyButton.innerText = "Copy";
    }, 2000);
  } catch (err) {
    console.error("Unable to copy text:", err);
  } finally {
    // Show the copy button again
    copyButton.style.display = "inline";

    // Deselect the text
    window.getSelection().removeAllRanges();
  }
});





let HTMLBox = document.getElementById("HTMLBox");
let HTMLButton = document.getElementById("HTMLButton");
HTMLButton.onclick = function () {
  HTMLBox.select();
  document.execCommand("copy");
  HTMLButton.innerText = "Codes Copied";
};
// CSS Box Js Code
let CSSBox = document.getElementById("CSSBox");
let CSSButton = document.getElementById("CSSButton");
CSSButton.onclick = function () {
  CSSBox.select();
  document.execCommand("copy");
  CSSButton.innerText = "Codes Copied";
};
// JavaScript BOx JS Code
let JSBox = document.getElementById("JSBox");
let JSButton = document.getElementById("JSButton");
JSButton.onclick = function () {
  JSBox.select();
  document.execCommand("copy");
  JSButton.innerText = "Codes Copied";
};



