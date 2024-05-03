const express = require('express');
const { ProblemController } = require('../../controllers');
const router = express.Router();

router.get("/ping", ProblemController.pingProblemController)

router.get("/:id", ProblemController.getProblem)

router.get("/", ProblemController.getAllProblems)

router.post("/", ProblemController.addProblem)

router.put("/:id", ProblemController.updateProblem)

router.delete("/:id", ProblemController.deleteProblem)


module.exports = router