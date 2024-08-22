const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/can.jpg") {
    myImage.setAttribute("src", "images/can2.jpg");
  } else {
    myImage.setAttribute("src", "images/can.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Have a Liquid Death, ${myName}`;
    }
}
  
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Have a Liquid Death, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
  
  