export const Read = () => {
    let userArray = ''
    for(let i = 0; i <= (localStorage.length-1); i++){
        let catchUser = localStorage.getItem(i)
        userArray = userArray + catchUser
        
    }
    document.getElementById('fireCanvas').innerHTML = userArray
    event.preventDefault()
}

 //let pegandoCliente = JSON.parse(localStorage.getItem('cliente'))
