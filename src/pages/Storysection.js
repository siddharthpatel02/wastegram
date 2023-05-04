import { Box } from "@mui/system";
import React from "react";
import styles from "./storysection.module.css";

import Story from "../utilities/Story";
import image from "../assets/akash.jpg";
import image2 from "../assets/siddharth.jpg";
import image3 from "../assets/anoop.jpg";
import image4 from "../assets/rajan.jpg";
import image5 from "../assets/madhav.jpg";
import image6 from "../assets/udit.jpeg";

const Storysection = () => {
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
      <Story img={image} name="Akaash malviye" />
      <Story img={image2} name="Siddharth patel " />
      <Story img={image3} name="Anoop sharma" />
      <Story img={image4} name="Rajan sharma" />
      <Story img={image5} name=" madhav sharma" />
      <Story img={image6} name=" Udit Tiwari" />
      <Story img={image} name="Akaash malviye" />
      <Story img={image2} name="Siddharth patel " />
      <Story img={image3} name="Anoop sharma" />
      <Story img={image4} name="Rajan sharma" />
      <Story img={image5} name=" madhav sharma" />
      <Story img={image6} name=" Udit Tiwari" />
      <Story img={image} name="Akaash malviye" />
      <Story img={image2} name="Siddharth patel " />
      <Story img={image3} name="Anoop sharma" />
      <Story img={image4} name="Rajan sharma" />
      <Story img={image5} name=" madhav sharma" />
      <Story img={image6} name=" Udit Tiwari" />
      <Story img={image} name="Akaash malviye" />
      <Story img={image2} name="Siddharth patel " />
      <Story img={image3} name="Anoop sharma" />
      <Story img={image4} name="Rajan sharma" />
      <Story img={image5} name=" madhav sharma" />
      <Story img={image6} name=" Udit Tiwari" />

      <Story img={image} name="Akaash malviye" />
      <Story img={image2} name="Siddharth patel " />
      <Story img={image3} name="Anoop sharma" />
      <Story img={image4} name="Rajan sharma" />
      <Story img={image5} name=" madhav sharma" />
      <Story img={image6} name=" Udit Tiwari" />
    </Box>
  );
};

export default Storysection;
