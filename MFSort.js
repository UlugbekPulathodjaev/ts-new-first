var users = [
    { name: 'Rustambek', gender: 'Male' },
    { name: 'Sevinch', gender: 'Female' },
    { name: 'Muhamadalim', gender: 'Male' },
    { name: 'Nurmuhammad', gender: 'Male' },
    { name: 'Lourence', gender: 'Female' },
    { name: 'Farida', gender: 'Female' },
    { name: 'Anya', gender: 'Female' },
];
function filterUsers() {
    var genderInput = document.getElementById('gender');
    var userList = document.getElementById('userList');
    if (!genderInput || !userList) {
        console.error('Not found');
        return;
    }
    var genderFilter = genderInput.value.trim().toLowerCase();
    var filteredUsers = users.filter(function (user) { return user.gender.toLowerCase() === genderFilter; });
    userList.innerHTML = '';
    filteredUsers.forEach(function (user) {
        var listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}
