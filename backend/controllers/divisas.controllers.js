const sequalize = require("sequelize");
const divisasModel = require("../database/models/Divisas");

const Divisas = {
  getDivisas: async (req, res) => {
 
    const infoD = await divisasModel.findAll();

    console.log(infoD);
    res.json(infoD);
  },
  deleteDivisas: async (req, res) => {
    await divisasModel.destroy({
      where: {
        id: req.body.id,
      },
    });
    console.log("borrado");
  },
  updateDivisas: async (req, res) => {
    let { id, grupo, socios, acciones, prestamos, importe } = req.body;
    
    if (pais == "España") {
      importe = importe / 1.1;
    } else if (pais == "Peru") {
      importe = importe / 3.3;
    }

    await divisasModel.update(
      {
        grupo: grupo,
        socios: socios,
        acciones: acciones,
        prestamos: prestamos,
        importe: importe,
      },
      {
        where: { id: id },
      }
    );
    console.log("UPDATE");

  
    res.json(infoOne);
  },

  insertDivis: async (req, res) => {
    let { pais, grupo, socios, acciones, prestamos, importe } = req.body;

    if (pais == "España") {
      importe = importe / 1.1;
    } else if (pais == "Peru") {
      importe = importe / 3.3;
    }

    const insertDiv = await divisasModel.create({
      pais: pais,
      grupo: grupo,
      socios: socios,
      acciones: acciones,
      prestamos: prestamos,
      importe: importe,
    });

    res.json(insertDiv);
  },

  findOneDiv: async (req, res) => {
    const id = req.body.id;
    let infoOne = await divisasModel.findOne({ where: { id: id } });
      
      if (infoOne.pais == "España") {
        infoOne.importe = infoOne.importe * 1.1;
      } else if (infoOne.pais == "Peru") {
        infoOne.importe = infoOne.importe * 3.3;
      }
    
    res.json(infoOne);
  }
};

module.exports = Divisas;
