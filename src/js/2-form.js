const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const email = form.elenents.email.value;
  const message = form.elements.message.value;

  const data = {
    email,
    message,
  };

  saveToLocalStorage(STORAGE_KEY, data);
}

function saveToLocalStorage(key, value) {
  const valueJSON = JSON.stringify(value);
  localStorage.setItem(key, valueJSON);
}

function loadFromLocalStorage(key) {
  const zip = localStorage.getItem(key);
  try {
    return JSON.parse(zip);
  } catch {
    return zip;
  }
}
