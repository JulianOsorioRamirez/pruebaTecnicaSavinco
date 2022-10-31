import React, { useState, useEffect } from "react";

import Head from "../Head/Head";
import Line from "../Line/Line";
import Principal from "../body/Body";

function Page() {
  const [country, setCountry] = useState("España");
  const [datos, setDatos] = useState();
  const [multi, setMulti] = useState(1);

  useEffect(() => {
    fetch("/getDivisas")
      .then((res) => res.json())
      .then((divisas) => {
        // console.log(divisas);
        divisas.map((div) => console.log(div));
        let filtro = divisas.filter((divi) => divi.pais == country);
        let grupoN = 0;
        let socios = 0;
        let acciones = 0;
        let prestamos = 0;
        let importe = 0;
        let nacionalidad = filtro[0].pais;
        if (nacionalidad == "España") {
          setMulti(1.1);
        } else if (nacionalidad == "Peru") {
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

        console.log(importe)
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
    <div>
      <Head />
      <Line />
      <Principal />
      {/* HOLA */}
      {datos ? (
        <div>
          <p>grupoN</p>
          <p>{datos.grupoN}</p>
          <p>socios</p>
          <p>{datos.socios}</p>
          <p>graciones</p>
          <p>{datos.acciones}</p>
          <p>prestamos</p>
          <p>{datos.prestamos}</p>
          <p>importe</p>
          <p>{parseInt(datos.importe / multi)}</p>
        </div>
      ) : (
        ""
      )}
      <input type="button" value="España" onClick={(e)=>setCountry(e.target.value)}/>
      <input type="button" value="Mexico" onClick={(e)=>setCountry(e.target.value)}/>
      <input type="button" value="Peru" onClick={(e)=>setCountry(e.target.value)}/>
    </div>
  );
}

export default Page;
