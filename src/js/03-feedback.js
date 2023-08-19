const form = document.querySelector('.feedback-form');
const start = document.querySelector(`[name="email"]`);
form.addEventListener('input', handleSubmit);

function handleSubmit(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;
  const obj = { email: email.value, message: message.value };
  console.log(obj);
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}
