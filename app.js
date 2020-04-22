   // imports functions and utilities from notes.js that is custom made. this keeps code organised in different files

const func = require('./notes')
const validator = require('validator');
const chalk = require('chalk')
const yargs = require('yargs') // yargs library used for manipulating command line args


yargs.version('1.1.0')
//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe:" Title of the note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "body of the note",
            demandOption: true,
            type: 'string'
        }
        
    },
    handler (argv)  {
        console.log(' Adding a new note')
       func.addNote(argv.title, argv.body)
    }

}

)

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe:" Title of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        console.log("removing a note")
        func.removeNote(argv.title)
    }

})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe:" Title of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        console.log(" reading a note")
        func.readNote(argv.title)
    
}
})

yargs.command({
    command: 'list',
    describe: "listing a note",
    handler() { 
        console.log(" listing notes")
        func.listNotes()
    
}

})
//console.log(command)
//console.log(yargs.argv) // this call yargs.argv and then do its thing like parse all the comands. yargs,parse could also be used
                          // instead of this

yargs.parse()