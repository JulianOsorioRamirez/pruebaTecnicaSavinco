import React, { useState, useEffect } from "react";

import Head from "../Head/Head";
import Line from "../Line/Line";
import Principal from "../body/Body";
import Dates from "../dates/Date";

function Page() {
  return (
    <div>
      <Head />
      <Line />
      <Principal />
      <Line />
      <Dates/>
      <Line />

    </div>
  );
}

export default Page;
