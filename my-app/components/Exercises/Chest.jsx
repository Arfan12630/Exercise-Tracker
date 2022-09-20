import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import ExerciseDisplay from "../ExerciseDisplay";
import classes from "../ExerciseDisplay.module.css"
//import CardHeader from "@mui/material/CardHeader";
const Chest = () => {
 
  const [chestData, setChestData] = useState();
  

  
   const chestExercises = async() => {
    const response = await fetch("/chest")
    const data = await response.json()
    console.log(data)
    setChestData(data)

  }

  // const chestExerciseImages = async() => {
  //   const response = await fetch("/chestImages")
  //   const data = await response.json()
  //     console.log(data)
  //     setChestImageData(data)
  // }

  useEffect(() => {
   chestExercises()
  //  chestExerciseImages()
  }, []);
 

  if (chestData === undefined) return <h1> </h1>;



// const chestImage = chestImageData.map((images) => (
//   <ExerciseImageDisplay
//   id = {images._id.$oid}
//   key={images._id.$oid}
//   image={images.data.$binary.base64}
//   />
// ))

 const chestExercise = chestData.map((chest) => (
    <ExerciseDisplay
    id = {chest.metadata.uuid}
    key={chest.metadata.uuid}
    name ={chest.metadata.name}
    image={chest.metadata.image}
    shortDescription={chest.metadata.description.short}        
    />

  )) 
  return (
   <>
     {chestExercise}
     </>
  );
};

export default Chest;
