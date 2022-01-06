const previous = document.getElementById('previous');
const next = document.getElementById('next');
const sliderItems = document.querySelectorAll('.slider__item');
const share = document.getElementById('share');
const contacts = document.getElementById('contacts');
const sizesRadio = document.querySelectorAll('.sizes__radio');
const colorRadios = document.querySelectorAll('.colors__radio');
const closeMassangers = document.querySelector('.massangers__close');

previous.addEventListener('click', () => {
  for (let i = 0; i < sliderItems.length; i += 1) {
    if (sliderItems[i - 1] && sliderItems[i].getAttribute('data-status') === 'active') {
      sliderItems[i - 1].setAttribute('data-status', 'active');
      sliderItems[i].setAttribute('data-status', '');
      break;
    }
  }
});

next.addEventListener('click', () => {
  for (let i = 0; i < sliderItems.length; i += 1) {
    if (sliderItems[i + 1] && sliderItems[i].getAttribute('data-status') === 'active') {
      sliderItems[i + 1].setAttribute('data-status', 'active');
      sliderItems[i].setAttribute('data-status', '');
      break;
    }
  }
});

share.addEventListener('click', () => {
  if (contacts.getAttribute('data-visible') === 'false') {
    contacts.setAttribute('data-visible', 'true');
  } else {
    contacts.setAttribute('data-visible', 'false');
  }
});

closeMassangers.addEventListener('click', () => contacts.setAttribute('data-visible', 'false'));

function compare(event, dataAttribut) {
  const label = document.querySelector(`[for="${event.target.id}"]`);
  const labels = document.querySelectorAll(`.${label.className}`);

  if (event.target.checked) {
    label.setAttribute(dataAttribut, 'true');
  }

  for (let i = 0; i < labels.length; i += 1) {
    if (event.target.id !== labels[i].getAttribute('for')) {
      labels[i].setAttribute(dataAttribut, 'false');
    }
  }
}

for (let i = 0; i < sizesRadio.length; i += 1) {
  sizesRadio[i].addEventListener('change', (event) => compare(event, 'data-size'));
}

for (let i = 0; i < colorRadios.length; i += 1) {
  colorRadios[i].addEventListener('change', (event) => compare(event, 'data-color'));
}
