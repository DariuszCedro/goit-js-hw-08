var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector(`[name="email"]`);
const textInput = document.querySelector(`[name="message"]`);
form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;
  const obj = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function handleSubmit(e) {
  e.preventDefault();
  const objToReset = { email: '', message: '' };
  localStorage.setItem('feedback-form-state', JSON.stringify(objToReset));
  emailInput.value = '';
  textInput.value = '';
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}

const dataFromLS = localStorage.getItem('feedback-form-state');
const data = JSON.parse(dataFromLS);

if (dataFromLS) {
  const data = JSON.parse(dataFromLS);
  emailInput.value = data.email;
  textInput.value = data.message;
}
