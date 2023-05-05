const d = document;
const form = d.querySelector('#form');
const buttonSubmit = d.querySelector('#linkForm');

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const $form = new FormData(this);
    console.log($form.get('name'));
    buttonSubmit.setAttribute('href', `mailto:crimsond.work@gmail.com?subject=${$form.get('name')}${$form.get('email') }&body=${$form.get('message')}`);
    buttonSubmit.click();

}