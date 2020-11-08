import {Update} from './update.js'
import {ClearAll} from './clear.js'
import {Create} from './create.js'
import {Read} from './read.js'



class Update_ {
    constructor(id) {
        this.Button = document.getElementById(id)
    }
    addActiveEvent() {
        this.Button.addEventListener('click', ()=>{
            Update()
        } )
    }
}

const update = new Update_("upd")
update.addActiveEvent()

class Post {
    constructor(button, fname, lname) {
        this.postButton = document.getElementById(button)
        
    }
    addActiveEvent() {
        this.postButton.addEventListener('click', ()=>{
            
            
            Create()
        } )
    }
}

const post = new Post("post", "fname", "lname")
post.addActiveEvent()

class Get {
    constructor(button, input) {
        this.readButton = document.getElementById(button)
        this.value = document.getElementById(input).value
    }
    addActiveEvent() {
        this.readButton.addEventListener('click', ()=>{
            
            
            Read(this.value)
        } )
    }
}

const get = new Get("get", "fname")
get.addActiveEvent()

class Clear {
    constructor(button, input) {
        this.button = document.getElementById(button)
        this.value = document.getElementById(input).value
    }
    addActiveEvent() {
        this.button.addEventListener('click', ()=>{
            
            ClearAll(this.value)
        } )
    }
}

const clear = new Clear("clear", "fname")
clear.addActiveEvent()