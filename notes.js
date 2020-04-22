const myNotes = "notes...."
const fs = require('fs')
const chalk = require('chalk')
 const myFunc = () => {
     return myNotes
 }
 const addNote =  (title, body) => {
    const notes = loadNotes()

    const dNote = notes.find(  (note) => {
        return note.title === title
    })

    if(!dNote) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.bgGreen(" new note added"))
    }
    
    else {
        console.log(' note title taken')
    }

 }

 const removeNote = (title) => {
     const notes = loadNotes()
     const n = notes.filter(  (note) => {
         return note.title === title
     } )
     if(n.length > 0) {
        const newnotes = notes.filter(  (note) => {
            return note.title !== title
        } )

        saveNotes(newnotes)
        console.log(chalk.bgGreen(" note removed"))
     }
     else {
         console.log(chalk.bgRed(" no title present in notes"))
     }

 }

 const listNotes = () => {
     const notes = loadNotes()
  
     notes.forEach(element => {
         console.log("title "+ chalk.green(element.title))
         
     });
 }
 
 const readNote = (title) => {
     const notes = loadNotes()
    //console.log(title)
  const note =   notes.find( (note) => {
     // console.log(note.title === title)
        return note.title === title
     })
     console.log(note)
     if(note) {
        console.log( chalk.bgGreen(note.title)+" : "+ note.body)

     }
     else {
         console.log(chalk.red("title is not present in the file"))
     }

 }

 const saveNotes =  (notes) => {
   const data = JSON.stringify(notes)
   fs.writeFileSync('notes.json', data) 
 }
 const loadNotes =  () => {
     try {
     const dataBuffer = fs.readFileSync('notes.json')
     const data = dataBuffer.toString();
     return JSON.parse(data);
     }
     catch (e) {
         return []
     }
 }

 module.exports = {
     myNotes: myNotes,
     addNote: addNote,
     removeNote: removeNote,
     listNotes: listNotes,
     readNote: readNote

 }