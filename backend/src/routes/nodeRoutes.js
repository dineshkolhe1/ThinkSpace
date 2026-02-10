import express from "express";
import { deleteNotes, getNotes, createNotes, updateNotes, getNotebyId } from "../controller/noteController.js";

const router = express.Router();

router.get("/", getNotes);
router.get('/:id', getNotebyId);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;