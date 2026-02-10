import Note from "../models/Note.js"

// to show the all notes
export const getNotes = async(req,res) => {
    try {
        const notes = await Note.find().sort({createdAt :-1});
        return res.status(200).json(notes);
    } catch (error) {
        console.error("Something error in getNotes controller",error);
        return res.status(500).json({message:"Internal server error"});
    }
}

// to only show the specific id notes - 
export const getNotebyId = async(req,res) => {
    try {
        const noteId = await Note.findById(req.params.id);
        if(!noteId) return res.status(404).json({message:"Note not Found"});
        return res.status(200).json(noteId);
    } catch (error) {
        console.error("Something error in getIdNotes controller",error);
        return res.status(500).json({message:"Internal server error"});
    }
}

// to create a new notes - 
export const createNotes = async(req,res) => {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});

        const saveNote = await newNote.save();
        return res.status(201).json(saveNote);

    } catch (error) {
        console.error("Something error in postNotes controller",error);
        return res.status(500).json({message:"Internal server error"});
    }
}

// to update the specific note - 
export const updateNotes = async(req,res) => {
    try {
        const {title, content} = req.body;
        const updates = await Note.findByIdAndUpdate(req.params.id,{title, content},{new:true});

        if(!updates) return res.status(404).json({message:"Note not Found"});

        return res.status(200).json(updates);
    } catch (error) {
        console.error("Something error in updateNotes controller",error);
        return res.status(500).json({message:"Internal server error"});
    }
}

// to delete the specific note - 
export const deleteNotes = async(req,res) => {
    try {
        
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote) return res.status(404).json({message:"Note not found"});

        return res.status(200).json({message:"Note deleted succesfully"});
    } catch (error) {
        console.error("Something error in deleteNotes controller",error);
        return res.status(500).json({message:"Internal server error"});
    }
}