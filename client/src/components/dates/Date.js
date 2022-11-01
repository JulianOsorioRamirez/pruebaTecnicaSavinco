import React, { useState, useEffect } from "react";
import "./Date.css";



function Dates() {
  const [country, setCountry] = useState("España");
  const [datos, setDatos] = useState();
  const [multi, setMulti] = useState(1);

  useEffect(() => {
    fetch("/getDivisas")
      .then((res) => res.json())
      .then((divisas) => {
        divisas.map((div) => console.log(div));
        let filtro = divisas.filter((divi) => divi.pais === country);
        let grupoN = 0;
        let socios = 0;
        let acciones = 0;
        let prestamos = 0;
        let importe = 0;
        let nacionalidad = filtro[0].pais;
        if (nacionalidad === "España") {
          setMulti(1.1);
        } else if (nacionalidad === "Peru") {
          setMulti(3.3);
        } else {
          setMulti(1);
        }
        filtro.map((atributos) => {
          grupoN += atributos.grupo;
          socios += atributos.socios;
          acciones += atributos.acciones;
          prestamos += atributos.prestamos;
          importe += atributos.importe;
        });

        setDatos({
          grupoN,
          socios,
          acciones,
          prestamos,
          importe,
          nacionalidad,
        });
      });
  }, [country]);

  return (
    <div className="datesContainer">
        <h1 className="datesTittle">Efectividad y Logros hasta la fecha :</h1>
      <div className="datesBtn">
      <button className="Btn2"
        type="button"
        value="España"
        onClick={(e) => setCountry(e.target.value)}
      >España</button>
      <button className="Btn2"
        type="button"
        value="Ecuador"
        onClick={(e) => setCountry(e.target.value)}
      >Ecuador</button>
      <button className="Btn2"
        type="button"
        value="Peru"
        onClick={(e) => setCountry(e.target.value)}
      >Peru</button>
      </div>
      {datos ? (
        <div className="dates">
          <div>
          <p className="dateT">grupos:</p>
          <p className="dateT2">{datos.grupoN}</p>
          </div>
          
          <div>
          <p className="dateT">socios:</p>
          <p className="dateT2">{datos.socios}</p>
          </div>

          <div>
          <p className="dateT">acciones:</p>
          <p className="dateT2">{datos.acciones}$</p>
          </div>

          <div>
          <p className="dateT">prestamos:</p>
          <p className="dateT2">{datos.prestamos}</p>
          </div>

          <div>
          <p className="dateT">importe total:</p>
          <p className="dateT2">{parseInt(datos.importe / multi)}$</p>
          </div>
        </div>
      ) : (
        ""
      )}
      
    </div>
    
    
    
  );
}

export default Dates;
