export default function Choice(options) {
  //allow for asynchronous usage
  return new Promise((resolve) => {
    //find container
      const container = document.querySelector("#option-box");
      container.innerHTML = "";
      container.style.display = "block";
      // check input type
      if (options[0] === "__input__") {
        //for text input
          const input = document.createElement("input");
          input.placeholder = "Type your name...";

          const submit = document.createElement("button");
          submit.textContent = "OK";

          submit.addEventListener("click", () => resolve(input.value));

          // remember to destroy the button and input bar after they are used
          submit.addEventListener("click", () => container.removeChild(submit));
          submit.addEventListener("click", () => container.removeChild(input));

          container.appendChild(input);
          container.appendChild(submit);
      } else {
        // for non text input
          options.forEach(option => {
              const button = document.createElement("button");
              button.textContent = option;

              button.addEventListener("click", () => resolve(option));
              
              // remember to t=destroy the buttons after use
              button.addEventListener("click", () => container.removeChild(button));
              container.appendChild(button);
          });
      }
  });
}
