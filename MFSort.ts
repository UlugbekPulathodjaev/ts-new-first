interface User {
    name: string;
    gender: string;
}

const users: User[] = [
    { name: 'Rustambek', gender: 'Male' },
    { name: 'Sevinch', gender: 'Female' },
];

function filterUsers() {
    const genderInput = document.getElementById('gender') as HTMLInputElement;
    const userList = document.getElementById('userList');

    if (!genderInput || !userList) {
        console.error('Elements not found');
        return;
    }

    const genderFilter = genderInput.value.trim().toLowerCase();

    const filteredUsers = users.filter(user => user.gender.toLowerCase() === genderFilter);

    userList.innerHTML = '';
    filteredUsers.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}
