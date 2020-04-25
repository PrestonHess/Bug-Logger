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
    let bug = await dbContext.Bugs.findById(id);
    if (!bug) {
      throw new BadRequest("Invalid Id");
    }
    return bug;
  }
}

export const bugsService = new BugsService();
