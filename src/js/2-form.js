const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);

document.addEventListener('DOMContentLoaded', function () {
  const savedFormData = loadFromLocalStorage(STORAGE_KEY) || {};

  form.elements.email.value = savedFormData.email || '';
  form.elements.message.value = savedFormData.message || '';
});

form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const email = form.elements.email.value.trim(); 
  const message = form.elements.message.value.trim();

  const data = {
    email,
    message,
  };

  saveToLocalStorage(STORAGE_KEY, data);
}

function onFormSubmit(event) {
  event.preventDefault();

  const formData = loadFromLocalStorage(STORAGE_KEY);

  if (!formData || !formData.email || !formData.message) {
    console.error('Не всі поля заповнені');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function saveToLocalStorage(key, value) {
  const valueJSON = JSON.stringify(value);
  localStorage.setItem(key, valueJSON);
}

function loadFromLocalStorage(key) {
  const dataJSON = localStorage.getItem(key);
  try {
    return JSON.parse(dataJSON);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
}
