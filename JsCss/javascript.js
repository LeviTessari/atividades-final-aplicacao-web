accounts =[]
let letters = []
let tbody = document.querySelector("#tbody")

function addAcc(){
    const name = document.getElementById("newUusername").value
    const password = document.getElementById("newPassword").value
    const repassword = document.getElementById("reNewPassword").value
    
    if (password === repassword){
            let usuario ={
            id: accounts.length+1,
            email,
            senha,
            recado: []
        }
    

        accounts.push(usuario)
        localStorage.setItem("usuarios", JSON.stringify(accounts))


        alert("Conta criada!")
        document.location.href="/index.html"

    }else{
        alert("As senhas digitadas não foram as mesmas, refaça o formulário.")
    }
}
let accounts = JSON.parse(localStorage.getItem("usuarios") || "[]")
let usuario ={
    id: accounts.length+1,
    email,
    senha,
    recado: []
}

accounts.push(usuario)
 function login(){    
    const user = document.getElementById("username").value
    const pass = document.getElementById("password").value
    const checkName = localStorage.getItem("Username")
    const password = localStorage.getItem("Password")

    if( user.toUpperCase() == checkName.toUpperCase() && pass == password ){
        alert("Logando...")
        document.location.href="pages/pageList.html"
    }else if(user.toUpperCase() != checkName.toUpperCase()){
        alert("Conta não cadastrada")
    }else{
        alert("Senha incorreta!")
    }
    
}

function save(){
    tbody.innerHTML=""
    for(const recado of letters){
        tbody.innerHTML+=`
        <tr>
            <td class="box1" >${contador} </td>
            <td class="box2" >${recado.descricao} </td>
            <td class="box3" >${recado.detalhamento} </td>
            <td class="box4" > 
            <button id="edit">Editar</button> 
            <button id="del">Deletar</button>
            </td>
        </tr>
        `
        
    }

 
}
