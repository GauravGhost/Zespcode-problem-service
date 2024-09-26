const express = require('express');
const { ProblemController, problemListController } = require('../../controllers');
const router = express.Router();

router.get("/all", problemListController.getAllProblemLists)

router.get("/ping", ProblemController.pingProblemController)

router.get("/query", ProblemController.getProblem)

router.get("/", ProblemController.getAllProblems)

router.post("/", ProblemController.addProblem)

router.put("/:id", ProblemController.updateProblem)

router.delete("/:id", ProblemController.deleteProblem)


module.exports = router