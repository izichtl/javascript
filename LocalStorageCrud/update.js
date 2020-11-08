export const Update = () => {


    let itemId = document.getElementById('itemId').value

    if(!itemId){
        alert("Por favor, insira o ID do usuário que deseja atualizar")
        return false
    }
    
    let lname= document.getElementById('lname').value 
    let fname= document.getElementById('fname').value
    if(!lname | !fname) {
        alert('Por favor, preencha todos os campos!')
        event.preventDefault()
        return false

    } 
    
    let user = { 
        id: itemId,
        fname: fname,
        lname: lname
    }
    let sCliente = JSON.stringify(user)
    let aaa = localStorage.getItem(itemId.toString(), sCliente)
    if(aaa){
        localStorage.setItem(itemId.toString(), sCliente)
        alert(`Usuário de Id: ${itemId} foi atualizado`)
    }else{
        alert("Por favor, insira o ID do usuário existente")
        
    }

}
