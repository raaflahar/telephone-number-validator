const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

const checkValidNumber = (input) => {
  if (input === "") {
    alert("Please provide a valid number");
    return;
  }

  const phoneNumber = /^(?:\(?\+?62\)?|0)?8\d{8,12}$/;
  const pOutput = document.createElement("p");
  pOutput.style.color = "#fbeaeb";
  pOutput.style.backgroundColor = "#2f3c7e";
  pOutput.style.fontSize = "20px";

  pOutput.appendChild(
    document.createTextNode(
      `${
        phoneNumber.test(input) ? "Valid" : "Invalid"
      } Indonesia Phone Number: ${input}`
    )
  );
  output.appendChild(pOutput);
};

checkBtn.addEventListener("click", () => {
  output.classList.remove("hidden");
  checkValidNumber(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    output.classList.remove("hidden");
    checkValidNumber(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  output.classList.add("hidden");
  output.textContent = "";
});
