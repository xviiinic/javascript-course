// console.log("=== DOM MANIPULATION AND INTERACTIVITY ===");


// document.querySelector(".className");
// document.querySelector("#idName");
// document.querySelector("tagName");
// document.querySelector('[type="text"]');
// document.querySelector("div p");

// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs.length);

// const message = document.querySelectorAll(."message");
// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";

// message.innerHTML = "<strong>Bold text from JS!</strong>";
// console.log(message.innerText);

// const input = document.querySelector("guess");

// console.log(input.value);
// input.value = "Default text";
// input.placeholder = "Type here";

// const heading = document.querySelector("hi");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

// // Click Events - user interaction

// const button = document.querySelector(#btn);
// const message = document.querySelector(".message");

// button.addEventListener("click", function () {
//     console.log("Button was clicked!");
//     message.textContent = "You clicked the button!";
//     nessage.style.color = "green";
// });

// let clickCount = 0;
// button.addEventListener("click", function () {
//     clickCount++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// // Input Events
// const input = document.querySelector(".guess");
// input.addEventListener("input", function () {
//     const userText = input.value;
//     message.textContent = `You typed: ${userText}`;
//     message.style.fontSize = `${userText.length + 10}px`;
// });

// input.addEventListener("keydown", function (event) {
//     console.log(`Key pressed: ${event.key}`);

//     if (event.key === "Enter") {
//         message.textContent = `You pressed Enter! Text was: ${input.value}`;
//         input.value = "";
//     }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

