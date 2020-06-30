const chalk = require('chalk') // Importing chalk Module 
const fs = require('fs') // Importing file System Module :

//Defining Color Using chalk Module : 
green = chalk.bgGreen.bold.white;
red = chalk.bgRed.bold.white;
purple = chalk.bgYellowBright.bold.blackBright;

const load = () => {
    let notesBuffer, jsonNotes, notes;
    try {
        
        notesBuffer = fs.readFileSync('./Notes.json', 'utf-8');
        jsonNotes = notesBuffer.toString()
        notes = JSON.parse(jsonNotes);
    }catch(error){
        return []
    }

    return notes;
}
const duplicateNotes = (notes,note)=>{
 
  let duplicate =  notes.find((element)=>{
          return element.title === note.title ;
      })
    if(duplicate)
     return true;
    else 
     return false; 
}
const save = notes => {
    let jsonNotes;

    jsonNotes = JSON.stringify(notes);
    fs.writeFileSync('./Notes.json', jsonNotes);
}
const add = (title, body) => {
    let notes ;
    let note = {
        title: title,
        body: body
    }
    notes = load() ;
    if(duplicateNotes(notes,note)){
      console.log(red("Title is already Taken !"))
    }else{
    notes.push(note);
    save(notes);
    console.log(green("Note Add to System :"))
    }
}

const remove = (title)=>{
    let notes,filtered ;
      notes =  load()

      if(!notes.length)
      console.log(red("There is no notes in System ! "))
      else{

    filtered = notes.filter((note) =>{
         
         return note.title != title ;
 
       })
        console.log(filtered)
       if(notes.length === filtered.length)
       console.log(red("Note Not Found !"))
       else{
           save(filtered);
           console.log(green("Note removed from system :"))
       }
  
      }

}
add('shopping','Hello I would go for shopping next month')
//add('phone','I will purchase 256 gb and 8Gb storage Phone :')
add('cap','I have to purchase cap')

remove('phone')