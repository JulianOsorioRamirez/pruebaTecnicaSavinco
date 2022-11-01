const router = require("express").Router();
const divisasController = require("../controllers/divisas.controllers")

router.get("/getDivisas", divisasController.getDivisas);
router.post("/deleteDivisa", divisasController.deleteDivisas);
router.put("/updateDivisas", divisasController.updateDivisas);
router.post("/insertDivisas", divisasController.insertDivis);
router.post("/findOne", divisasController.findOneDiv);


module.exports = router;