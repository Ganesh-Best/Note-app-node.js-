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
   command:'add',
   description:'Adding a Note :',
   builder:{
       title:{
           demandOption:true,
           description:'Title of Note',
           type:'string'
       },
       body:{
           demandOption:true,
           type:'string',
           description:'Description of Note :'
       }
   },
   handler:function(argv){
     console.log(green("Adding note to System :"))
   }
})

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

 yargs.command({
    command:'list',
    description:'list all  Note :',
    handler:function(argv){
      console.log(green(" Notes given below :"))
    }
 })

yargs.parse(); 