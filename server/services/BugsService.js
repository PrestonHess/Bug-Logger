import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugsService {
  async create(body) {
    let bug = await dbContext.Bugs.create(body)
    return bug
  }
  async findAll(query) {
    let bugs = await dbContext.Bugs.find(query).populate(
      "creator",
      "name picture"
    );
    return bugs;
  }
  async findById(id) {
    let bug = await dbContext.Bugs.findById(id).populate(
      "creator",
      "name picture"
    );
    if (!bug) {
      throw new BadRequest("Invalid Id");
    }
    return bug;
  }

  async edit(id, email, payload) {
    let bug = await dbContext.Bugs.findByIdAndUpdate({_id: id, creatorEmail: email }, payload, { new: true })
    return bug
  }
}

export const bugsService = new BugsService();
