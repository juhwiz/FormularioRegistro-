//elementos 

const form = document.getElementById('userForm');
const listBtn = document.getElementById('listBtn');
const userList = document.getElementById('usersList');
const alterarBtn = document.getElementById('alterarBtn');

//Array de usuários
let users = [];

//Formulário para inserir usuário 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    addUser(name, age, course);
    form.reset();

});

//Adicionar usuários
function addUser(name, age, course){
    users.push({name, age, course});
    console.log(users);
}

//display de usuários
function displayUsers(){
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const userHTML = `        
            <div class="userItem">
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Course: ${user.course}</p>
            <button class="editBtn" onclick="editUser(${index})">Editar</button>
            <button class="deleteBtn" onclick="deleteUser(${index})">Deletar</button>
        </div>`;

        usersList.insertAdjacentHTML('beforeend', userHTML);
        console.log(userHTML);
    });
}

//Function deletar
function deleteUser(index){
    users.splice(index, 1);
    displayUsers();
}

//Function editar usuário
function editUser(index){

    console.log("index antes do alterarBtn: " + index);

    //Devolve valor para o input do form
    document.getElementById('name').value = users[index].name;
    document.getElementById('age').value = users[index].age;
    document.getElementById('course').value = users[index].course;

    document.getElementById('alterarBtn').style.display = "unset";

    //Alterar lista de usuário
    alterarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        //Passa para o array os novos dados
        users[index].name = document.getElementById('name').value;
        users[index].age = document.getElementById('age').value;
        users[index].course = document.getElementById('course').value;

        //Recarrega a lista usuário e limpa o form
        displayUsers();
        form.reset();

        document.getElementById('alterarBtn').style.display = "none";
        console.log("index no final: " + index);
        console.log(users);
    }, { once: true });
 
}





//Function lista de usuarios 
function toggleUsersList(){
    usersList.classList.toggle('hidden');
    if(!usersList.classList.contains('hidden')){
        displayUsers();
    }
}

//botão listagem 

listBtn.addEventListener('click', toggleUsersList);

