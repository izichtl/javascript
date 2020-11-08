export const Delete = () => {


    let itemId= document.getElementById('itemId').value 
    
    let lname= document.getElementById('lname').value 
    let fname= document.getElementById('fname').value 
    
    
    let user = { 
        id: itemId,
        fname: fname,
        lname: lname
    }
    let sCliente = JSON.stringify(user)
    localStorage.setItem(itemId.toString(), sCliente)
    

    
    
    
   
    
    
    alert("Usuário XXXXX foi removido.")

}
