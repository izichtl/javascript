export const Create = () => {

    //fazer tratamento de input void
    let id = localStorage.length
    let lname= document.getElementById('lname').value 
    let fname= document.getElementById('fname').value
    if(!lname | !fname) {
        alert('Por favor, preencha todos os campos!')
        return false
    } 


    let user = { 
        id: id,
        fname: fname,
        lname: lname
    }
    let sCliente = JSON.stringify(user)
    localStorage.setItem(id.toString(), sCliente)
    
    
    
   
    
    
    alert(`Usuário: ${user.fname} ${user.lname} foi inserido`)
    
}


    /*
    
   
    let pegandoCliente = JSON.parse(localStorage.getItem('cliente'))
    document.getElementById('fireCanvas').innerHTML = pegandoCliente
    console.log(pegandoCliente)
    
    */