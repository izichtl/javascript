process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Person(initialAge){
    this.age = initialAge
    let cc = initialAge < 0
      if(cc){
      console.log(`Age is not valid, setting age to 0.`)
      this.age = 0    
      }
    // Add some more code to run some checks on initialAge
  this.amIOld=function(age){
      let m13 = (this.age < 13)
      let m18 = (this.age >= 18)
      let ma1318 = (this.age >= 13 && this.age <18)
      

      if(m13){
      console.log(`You are young.`)   
      }else{   
        if(ma1318){
        console.log(`You are a teenager.`)   
        }
        if(m18){
        console.log(`You are old.`)   
            
        }
      }
         
          
      
        
   // Do some computations in here and print out the correct statement to the console

  };
   this.yearPasses=function(){
      this.age = this.age + 1   
          // Increment the age of the person in here
   };
}

function main()