const chalk = require('chalk') // Importing chalk module
const yargs = require('yargs') //Importing yargs module

//Defining Color Using chalk Module : 
green = chalk.bgGreen.bold.white ;
red = chalk.bgRed.bold.white;
purple = chalk.bgYellowBright.bold.blackBright;

// Creating Custom Command 

//Creating  Add command 
//Whenever add command run through command prompt , handler function get execute automatically:  
yargs.command({
   command:'add',   // name of command
   description:'Adding a Note :', // description of command
   builder:{      // variables after the command
       title:{     // name of variable after the  command
           demandOption:true,  // requirement of variable
           description:'Title of Note',  // description of variable
           type:'string'    // Type of variable
       }, 
       body:{       // variables after the command 
           demandOption:true, // name of variable after the  command
           type:'string',    // Type of variable
           description:'Description of Note :'  // description of variable
       }
   },
   handler:function(argv){     // It is handler function , run immediately when command run:
     console.log(green("Adding note to System :"))
   }
})

//Creating  remove command 
//Whenever remove command run through command prompt , handler function get execute automatically:  

yargs.command({
    command:'remove',
    description:'Removing a Note :',
    builder:{
        title:{
            demandOption:true,
            description:'Title of Note',
            type:'string'
        }
    },
    handler:function(argv){
      console.log(green("removing  a note :"))
    }
 })

 //Creating  read command 
//Whenever read command run through command prompt , handler function get execute automatically:  

 yargs.command({
    command:'read',
    description:'reading a Note :',
    builder:{
        title:{
            demandOption:true,
            description:'Title of Note',
            type:'string'
        }
    },
    handler:function(argv){
      console.log(green(" Note given below :"))
    }
 })

 //Creating  list command 
//Whenever list command run through command prompt , handler function get execute automatically:  

 yargs.command({
    command:'list',
    description:'list all  Note :',
    handler:function(argv){
      console.log(green(" Notes given below :"))
    }
 })

// apply all changes: 
yargs.parse(); 