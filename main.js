const form = document.querySelector('#formAgendas');
const tbody = document.querySelector('tbody');
const total = document.querySelector('#total');
let contacts = [];

function addContact(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#Nome');
    const numberInput = document.querySelector('#Numero');

    const contact = {
        name: nameInput.value,
        number: numberInput.value,
        added: new Date().toLocaleString()
    };

    contacts.push(contact);
    nameInput.value = '';
    numberInput.value = '';

    Table();
}

function Table() {
    tbody.innerHTML = '';

    for (const contact of contacts) {
        const tr = document.createElement('tr');
        const nameTd = document.createElement('td');
        const numberTd = document.createElement('td');
        const addedTd = document.createElement('td');

        nameTd.textContent = contact.name;
        numberTd.textContent = contact.number;
        addedTd.textContent = contact.added;

        tr.appendChild(nameTd);
        tr.appendChild(numberTd);
        tr.appendChild(addedTd);

        tbody.appendChild(tr);
    }

    total.textContent = contacts.length;
}

form.addEventListener('submit', addContact);
