'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}
 
class Student extends Person {
    constructor(firstName, lastName, id, testScores, numScores){
        super()
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.score = testScores
        
    }
    printPerson(){
        console.log(`Name: ${this.lastName}, ${this.firstName}`)
        console.log(`ID: ${this.id}`)
    }
    calculate(){
        let grade
        const sum = this.score.reduce( (a , p) => {
            return a + p
        })
        const tt = this.score
        let media = (sum/tt.length)
        
        
        
        if (media < 40 ){
            grade = 'T'
        }
        if (media >= 40 && media < 55){
            grade = 'D'
        }
        if (media >= 55 && media < 70){
            grade = 'P'
        }
        if (media >= 70 && media < 80){
            grade = 'A'
        }
        if (media >= 80 && media < 90){
            grade = 'E'
        }
        if (media >= 90 && media <= 100){
            grade = 'O'
        }
        
        return grade
        
    }

    
    
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
