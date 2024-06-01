const inputs = document.querySelectorAll('.otp-bx input');
const modal = document.querySelector('.modal');


inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("input", handleOtp);
})

function handleOtp(e) {
  const input = e.target;
  let value = input.value;

  if (value.length > 1) {
    input.value = value[0];
  }

  let fieldsIndex = parseInt(input.dataset.index);
  
  if (value.length > 0 && fieldsIndex < inputs.length - 1) {
    inputs[fieldsIndex + 1].focus();
  }

  if (e.inputType === "deleteContentBackward" && fieldsIndex > 0) {
    inputs[fieldsIndex - 1].focus();
  }

  if (fieldsIndex === inputs.length - 1) {
    submit();
  }
}

function submit() {
  let otp = "";
  inputs.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add("disabled");
  });

  if (otp == "7878") {
    window.location.href = "../main/main.html";
  } else {
    modal.style.display = 'block';
    document.addEventListener('click', function(event) {
      if (event.target != modal) {
        modal.style.display = 'none';
        inputs.forEach((input) => {
          input.disabled = false;
          input.classList.remove("disabled");
          input.value = '';
        });
      }
    });
  }


}
