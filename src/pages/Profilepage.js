import { Avatar, ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import image from "../assets/akash.jpg";
import styles from "./profilepage.module.css";
import image2 from "../assets/siddharth.jpg";
import image3 from "../assets/anoop.jpg";
import image4 from "../assets/rajan.jpg";
import image5 from "../assets/madhav.jpg";
import image6 from "../assets/udit.jpeg";

const Profilepage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // after api calling
    setData("api");
    console.log("data");
    // using map method to render profile pictures
  });
  const itemData = [
    {
      img: image,
      title: "Breakfast",
    },
    {
      img: image2,
      title: "Burger",
    },
    {
      img: image3,
      title: "Camera",
    },
    {
      img: image4,
      title: "Coffee",
    },
    {
      img: image5,
      title: "Hats",
    },
    {
      img: image6,
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
    {
      img: image,
      title: "Breakfast",
    },
    {
      img: image2,
      title: "Burger",
    },
    {
      img: image3,
      title: "Camera",
    },
    {
      img: image4,
      title: "Coffee",
    },
    {
      img: image,
      title: "Breakfast",
    },
    {
      img: image3,
      title: "Camera",
    },
  ];
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.profile}>
          <div className={styles.picture}>
            {" "}
            <Avatar
              className={styles.Avatar}
              alt="Remy Sharp"
              sx={{ width: 77, height: 77 }}
              src={image}
            />
          </div>
          <div className={styles.details}>
            <h2 className={styles.username}>Akash Malviya</h2>
            <div className={styles.status}>
              <h6>
                Life is a journey,
                 Not a Destination! My attitude is based on
                how you treat me. You know my name not my story.
              </h6>
            </div>
            <h6 className={styles.userdetails}>10 posts &nbsp;</h6>
            <h6 className={styles.userdetails}>10 followers &nbsp;</h6>
            <h6 className={styles.userdetails}>10 following &nbsp;</h6>
          </div>
        </div>
        <ImageList
          sx={{ width: "100%", height: "100%", pt: 0, mt: 4 }}
          cols={3}
          rowHeight={164}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Profilepage;
