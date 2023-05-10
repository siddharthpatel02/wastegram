import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import styles from "./storysection.module.css";

import Story from "../utilities/Story";
import image from "../assets/akash.jpg";
import image2 from "../assets/siddharth.jpg";
import image3 from "../assets/anoop.jpg";
import image4 from "../assets/rajan.jpg";
import image5 from "../assets/madhav.jpg";
import image6 from "../assets/udit.jpeg";

const Storysection = () => {
  const [data,setData]=useState("")

  useEffect(()=>{
    // after api calling
    setData("api")
    console.log("data")
    // using map method to render stories
    
  },[])
  return (
    <Box
      className={styles.box}
      sx={{
        mt: 7,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        overflowX: "scroll",

        // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
      }}
    >
      <Story key="1" img={image} name="Akaash malviye" />
      <Story key="2"  img={image2} name="Siddharth patel " />
      <Story key="3"  img={image3} name="Anoop sharma" />
      <Story key="4" img={image4} name="Rajan sharma" />
      <Story key="5" img={image5} name=" madhav sharma" />
      <Story key="6" img={image6} name=" Udit Tiwari" />
      <Story key="7" img={image} name="Akaash malviye" />
      <Story key="8" img={image2} name="Siddharth patel " />
      <Story key="9" img={image3} name="Anoop sharma" />
      <Story key="10" img={image4} name="Rajan sharma" />
      <Story key="11" img={image5} name=" madhav sharma" />
      <Story key="12" img={image6} name=" Udit Tiwari" />
      <Story key="13" img={image} name="Akaash malviye" />
      <Story key="14" img={image2} name="Siddharth patel " />
      <Story key="15" img={image3} name="Anoop sharma" />
      <Story key="16" img={image4} name="Rajan sharma" />
      <Story key="17" img={image5} name=" madhav sharma" />
      <Story key="18" img={image6} name=" Udit Tiwari" />
      <Story key="19" img={image} name="Akaash malviye" />
      <Story key="20" img={image2} name="Siddharth patel " />
      <Story key="21" mg={image3} name="Anoop sharma" />
      <Story key="22" img={image4} name="Rajan sharma" />
      <Story key="23" img={image5} name=" madhav sharma" />
      <Story key="24" img={image6} name=" Udit Tiwari" />

    </Box>
  );
};

export default Storysection;
