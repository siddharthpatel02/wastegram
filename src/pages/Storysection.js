import { Box } from "@mui/system";
import React from "react";
import styles from "./storysection.module.css";

import Story from "../utilities/Story";

const Storysection = () => {
  return (
    <Box
      className={styles.box}
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        overflowX: "scroll",

        // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
      }}
    >
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </Box>
  );
};

export default Storysection;
