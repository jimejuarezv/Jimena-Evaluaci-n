document.getElementById('addUserBtn').addEventListener('click', function() {
    document.getElementById('userFormContainer').classList.toggle('hidden');
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        addUser(name, email);
        document.getElementById('userForm').reset();
        document.getElementById('userFormContainer').classList.add('hidden');
    }
});

function addUser(name, email) {
    const userList = document.getElementById('userList');
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    
    userElement.innerHTML = `
        <div class="header">
            <img src="https://e7.pngegg.com/pngimages/223/244/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle.png" alt="perfil jimena"> 
            <div class="name-email">
                <strong>${name}</strong>
                <small>${email}</small>
            </div>
            <span class="assignment-count">0</span>
            <button class="add-assignment-btn">+</button>
        </div>
        <div class="assignments"></div>
    `;
    
    userList.appendChild(userElement);
    
    userElement.querySelector('.add-assignment-btn').addEventListener('click', function() {
        addAssignment(userElement);
    });
}

function addAssignment(userElement) {
    const assignmentCountElement = userElement.querySelector('.assignment-count');
    const currentCount = parseInt(assignmentCountElement.textContent);
    const newCount = currentCount + 1;
    assignmentCountElement.textContent = newCount;
    
    const assignmentsContainer = userElement.querySelector('.assignments');
    const assignmentElement = document.createElement('span');
    assignmentElement.classList.add('assignment');
    assignmentElement.textContent = `Asignación ${newCount}`;
    assignmentsContainer.appendChild(assignmentElement);
}