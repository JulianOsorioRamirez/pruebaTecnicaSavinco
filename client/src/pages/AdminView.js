import React, { useState, useEffect } from "react";
import Head from "../components/Head/Head";
import Acomp from "../components/adminComponents/aComponents";
import Line from "../components/Line/Line";


function Admin () {
    return(
     <div>
        <Head/>
        <Line/>
        <Acomp/>
     </div>
    )
}

export default Admin;