import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { bugsService } from "../services/BugsService";
import { notesService } from "../services/NotesService";

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("/:id", this.getBug)
      .put("/:id", this.edit)
      .post("", this.create)
      .post("/:id/Notes", this.createNote);
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let note = await notesService.create(req.body)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async getBug(req, res, next) {
    try {
      let bug = await bugsService.findById(req.params.id)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let data = await bugsService.findAll({})
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let bug = await bugsService.edit(req.params.id, req.body.creatorEmail , req.body)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let bug = await bugsService.create(req.body)
      return res.status(201).send(bug)
    } catch (error) {
      next(error);
    }
  }
}
