import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {
  async delete(id, email) {
    let data = await dbContext.Notes.deleteOne({ _id : id, creatorEmail: email })
    return data
  }
  async create(body) {
    let note = await dbContext.Notes.create(body)
    return note
  }
  async findAll(query) {
    let notes = await dbContext.Notes.find(query).populate(
      "creator",
      "name picture"
    );
    return notes;
  }
  async findById(id) {
    let note = await dbContext.Bugs.findById(id).populate(
      "creator",
      "name picture"
    );
    if (!note) {
      throw new BadRequest("Invalid Id");
    }
    return note;
  }

  async edit(id, email, payload) {
    let note = await dbContext.Bugs.findByIdAndUpdate({_id: id, creatorEmail: email }, payload, { new: true })
    return note
  }
}

export const notesService = new NotesService();
