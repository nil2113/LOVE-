// Typing effect for love message
let loveMessage = `তোমাকে অনেক ভালোবাসি গো Madam।
আমার দুনিয়া তুমি। আমার ভালবাসা তুমি। আমার গিন্নী তুমি।
আমার জীবনের সবটুকু জুড়ে শুধু তুমি আছো। আমার প্রতি টা মুহূর্তে তুমি আছো, ছিলে, থাকবে। তোমাকে আমি সারাটা জীবন ভালোবাসে তোমার খেয়াল রেখে কাটাতে চাই। শুধু 7 জন্ম নয় প্রতি টা জন্মেই আমার তোমাকেই চাই। আমার সবার প্রথম এবং শেষ ভাবনা তুমি। তোমার Voice আমার সবচেয়ে Favourite। 
আমার যত যাই নিয়ে চিন্তা মনখারাপ থাক না কেনো শুধু তোমার সাথেই একটু কথা বললেই তোমার মুখটা একবার দেখে নিলেই আমার সব কিছু ঠিক হয়ে যায়। আমি অনেক ভাগ্যবান যে তোমাকে আমি আমার জীবন সঙ্গিনী ভালোবাসা হিসাবে পেয়েছি। আমার জীবনের শেষ নিঃশ্বাস পর্যন্ত আমি তোমাকে ভালোবেসে তোমার সাথেই কাটাতে চাই Madam।
LOVE YOU SO MUCH ❤️🫂
`;

let i = 0;
let loveMessageElement = document.getElementById("loveMessage");

function typeMessage() {
  if (i < loveMessage.length) {
    loveMessageElement.innerHTML += loveMessage.charAt(i);
    i++;
    setTimeout(typeMessage, 50); // Adjust the speed of typing
  }
}

typeMessage();

// Heart click animation
document.getElementById("heart").addEventListener("click", function () {
  this.classList.add("animate__heart"); // Add animation when clicked
  setTimeout(() => {
    this.classList.remove("animate__heart");
  }, 500);
});

// Popup functions
function showPopup() {
  document.getElementById("popup").style.display = "flex"; // Show popup
}

function closePopup() {
  document.getElementById("popup").style.display = "none"; // Close popup
}
