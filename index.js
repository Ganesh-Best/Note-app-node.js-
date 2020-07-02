
const chalk = require('chalk') // Importing chalk Module  // for printing colourful text in terminal
const fs = require('fs') // Importing file System Module :for handing file operations

//Defining Color Using chalk Module : 
green = chalk.bgGreen.bold.white;
red = chalk.bgRed.bold.white;
purple = chalk.bgYellowBright.bold.blackBright;

// It is load function : it return all notes , if there is no notes then it return empty array:

const load = () => {
    let notesBuffer, jsonNotes, notes;
    try {

        notesBuffer = fs.readFileSync('./Notes.json', 'utf-8');
        jsonNotes = notesBuffer.toString()
        notes = JSON.parse(jsonNotes);
    } catch (error) {
        return []
    }

    return notes;
}

// It is duplicateNotes function :provides two argument,first notes (list of available  notes),note(note we want to insert/save)
/* 
it return true ,if notes already present in list of notes;
otherwise it return false :
*/
const duplicateNotes = (notes, note) => {

    let duplicate = notes.find((element) => {
        return element.title === note.title;
    })
    if (duplicate)
        return true;
    else
        return false;
}

/* It is save notes function :
 it convert notes into json format and store to json file :
*/
const save = notes => {
    let jsonNotes;

    jsonNotes = JSON.stringify(notes);
    fs.writeFileSync('./Notes.json', jsonNotes);
}
/*
It is  add function : passing two argument,title & body of notes ;
It add notes into file/ System :
*/
const add = (title, body) => {
    let notes;
    let note = {
        title: title,
        body: body
    }
    notes = load();
    if (duplicateNotes(notes, note)) {
        console.log(red("Title is already Taken !"))
    } else {
        notes.push(note);
        save(notes);
        console.log(green("Note Add to System :"))
    }
}

/*
 It is remove note function : passing title as argument
 it remove notes from (available notes)system/file :
*/
const remove = (title) => {
    let notes, filtered;
    notes = load()

    if (!notes.length)
        console.log(red("There is no notes in System ! "))
    else {

        filtered = notes.filter((note) => {

            return note.title != title;

        })
        console.log(filtered)
        if (notes.length === filtered.length)
            console.log(red("Note Not Found !"))
        else {
            save(filtered);
            console.log(green("Note removed from system :"))
        }

    }

}

/* It is read function: passing title of notes
it search notes from list of available notes and print it:
 */
const read = (title) => {
    let notes, filtered;
    notes = load()

    if (!notes.length)
        console.log(red("There is no notes in System :"));
    else {

        filtered = notes.find((note) => {
            return note.title === title;
        })

        if (filtered) {
            console.log(purple(`Note Given Below :`))
            console.log(green(`Title:=> ${filtered.title}`))
            console.log(green(`Description:=> ${filtered.body}`))
        } else
            console.log(red("Not not found"))

    }

}

/* It is list function :
It display all notes available in System :
 */
const list = () => {

    let notes;
    notes = load();

    if(!notes.length)
    console.log(red("There is no notes in System :"))
    else{
        console.log(purple("Notes Given Below :"))
        notes.forEach(element => {
            console.log(green(`Title :=> ${element.title}`))
            console.log(green(`description :=> ${element.body}`))
        }); 


    }

}

// Exporting an object with multiple function :
module.exports = {
 addNote:add,
 removeNote:remove,
 listAllNotes:list,
 readNote:read
}