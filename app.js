const chalk = require('chalk') // Importing chalk module
const yargs = require('yargs') //Importing yargs module
const NOTES = require('./index') //Integrating index.js file to this file & it return an object with multiple function : 
//Defining Color Using chalk Module : 
green = chalk.bgGreen.bold.white ;
red = chalk.bgRed.bold.white;
purple = chalk.bgYellowBright.bold.blackBright;

// Creating Custom Command 

//Creating  Add command 
//Whenever add command run through command prompt , handler function get execute automatically:
// yargs.argv is Object contains all variable and value we typed after the commands;
/* for example :
node app.js add --title="shopping" --body="t-shirts,2-jeans ,one-shirt"

so yargs.argv object container:
{_:[add],title:"shopping",body:"t-shirts,2-jeans,one-shirt"}  

you can access them by:
yargs.argv.title // return value of title
yargs.argv.body // return value of body
yargs.argv._  // return array :

*/
yargs.command({
   command:'add',   // name of command
   description:'Adding a Note :', // description of command
   builder:{      // Object that describe require variables after the command
       title:{     // name of variable after the  command
           demandOption:true,  // requirement of variable ,true means it must be present after command:
           description:'Title of Note',  // description of variable
           type:'string'    // Type of variable
       }, 
       body:{       // variables after the command 
           demandOption:true, // name of variable after the  command,true means it must be present after command:
           type:'string',    // Type of variable
           description:'Description of Note :'  // description of variable
       }
   },
   handler:function(argv){  //here yargs.argv or argv is same:    // It is handler function , run immediately when command run:
    
    //Calling addNote function : & passing two argument:
    NOTES.addNote(argv.title,argv.body) // 
  }
})

//Creating  remove command 
//Whenever remove command run through command prompt , handler function get execute automatically:  

yargs.command({
    command:'remove', // name of command
    description:'Removing a Note :', // description of command
    builder:{  // Object that describe require variable after command
      title:{  //  title variable
            demandOption:true,  // requirement
            description:'Title of Note', // description 
            type:'string' // type of variable 
        }
    },
    handler:function(argv){
       
      NOTES.removeNote(argv.title) 
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
   
      // Calling readNote Function & passing one argument title :
      NOTES.readNote(argv.title)

    }
 })

 //Creating  list command 
//Whenever list command run through command prompt , handler function get execute automatically:  

 yargs.command({
    command:'list',
    description:'list all  Note :',
    handler:function(argv){
      // Calling readNote Function  :
      NOTES.listAllNotes()
    }
 })

// apply or refresh  all changes: 
yargs.parse(); 