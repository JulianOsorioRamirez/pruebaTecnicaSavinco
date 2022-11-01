import React, { useState, useEffect } from "react";

import Head from "../Head/Head";
import Line from "../Line/Line";
import Principal from "../body/Body";
import Dates from "../dates/Date";
import Footer from "../footer/footer";

function Page() {
  return (
    <div>
      <Head />
      <Line />
      <Principal />
      <Line />
      <Dates/>
      <Line />
      <Footer/>
    </div>
  );
}

export default Page;
