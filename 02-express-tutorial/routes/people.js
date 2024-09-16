import express from "express";
const router = express.Router();

import {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
  singlePerson,
} from "../controller/people.js";

// router.get("/", getPeople);
// router.get("/:id", singlePerson);
// router.post("/", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/:id").get(singlePerson).put(updatePerson).delete(deletePerson);

export default router;
