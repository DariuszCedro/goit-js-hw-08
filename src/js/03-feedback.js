import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector(`[name="email"]`);
const textInput = document.querySelector(`[name="message"]`);

const handleInput = throttle(() => {
  const obj = {
    email: emailInput.value,
    message: textInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}, 500);

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
emailInput.addEventListener('input', handleInput);
textInput.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
