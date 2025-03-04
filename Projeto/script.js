//elementos 

const form = document.getElementById('userForm');
const listBtn = document.getElementById('listBtn');
const userList = document.getElementById('usersList');

//Array de usuários
let users = [];

//Adicionar usuários
function addUser(name, age, course){
    users.push({name, age, course});
}

//display de usuários
function displayUsers(){
    usersList.innerHTML = '';
    users.forEach((user, index) => {
        const userHTML = `        
            <div class="userItem">
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Course: ${user.course}</p>
            <button class="deleteBtn" onclick="deleteUser(${index})">Deletar</button>
        </div>`;

        usersList.insertAdjacentHTML('beforeend', userHTML);
    });
}

//Function deletar
function deleteUser(index){
    users.splice(index, 1);
    displayUsers();
}

//Function lista de usuarios 
function toggleUsersList(){
    usersList.classList.toggle('hidden');
    if(!usersList.classList.contains('hidden')){
        displayUsers();
    }
}

//Formulário para inserir usuário 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    addUser(name, age, course);
    form.reset();

});

//botão listagem 

listBtn.addEventListener('click', toggleUsersList);