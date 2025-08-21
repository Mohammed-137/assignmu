
let contacts = [
  { id: 1, name: "Muthu Lakshmi", phone: "9876452125" },
  { id: 2, name: "Jeya Lakshmi", phone: "6383687637" },
  { id: 3, name: "Sherly", phone: "8966256536" }
];


function addContact() {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "" || phone === "") {
        alert(" Please enter both name and phone number!");
        return;
    }

    
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert(" Phone number must be 10 digits!");
        return;
    }

    
    if (nameInput.dataset.index) {
        const index = nameInput.dataset.index;
        contacts[index].name = name;
        contacts[index].phone = phone;
        nameInput.dataset.index = ""; // clear editing state
    } else {
    
        const contact = { id: Date.now(), name, phone };
        contacts.push(contact);
    }

    // Reset form
    nameInput.value = "";
    phoneInput.value = "";

    displayContacts();
}


function displayContacts(list = contacts) {
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    if (list.length === 0) {
        contactList.innerHTML = "<li class='list-group-item'>No contacts found.</li>";
        return;
    }

    list.forEach((contact, index) => {
        const li = document.createElement("li");
        li.className = "d-flex justify-content-between align-items-center list-group-item";

        li.innerHTML = `
            <span><strong>${contact.name}</strong> - ${contact.phone}</span>
            <div>
                <button class="btn btn-primary btn-sm me-2" onclick="editContact(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteContact(${index})">Delete</button>
            </div>
        `;

        contactList.appendChild(li);
    });
}

function editContact(index) {
    const contact = contacts[index];
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");

    nameInput.value = contact.name;
    phoneInput.value = contact.phone;


    nameInput.dataset.index = index;
}


function deleteContact(index) {
    if (confirm(" Are you sure you want to delete this contact?")) {
        contacts.splice(index, 1);
        displayContacts();
    }
}


function searchContact() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchValue) ||
        contact.phone.includes(searchValue)
    );
    displayContacts(filtered);
}

window.onload = () => displayContacts();
