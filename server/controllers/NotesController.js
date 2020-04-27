import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { notesService } from "../services/NotesService";

export class NotesController extends BaseController {
  constructor() {
    super("api/notes");
    this.router
      .get("/:id", this.getAllById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .put("/:id", this.edit)
  }

  async getAllById(req, res, next) {
    try {
        let data = await notesService.findAll({ bug: req.params.id})
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let note = await notesService.edit(req.params.id, req.body.creatorEmail , req.body)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let note = await notesService.create(req.body)
      return res.status(201).send(note)
    } catch (error) {
      next(error);
    }
  }
}
