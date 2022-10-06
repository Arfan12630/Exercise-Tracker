import React from "react";
import { useState, useEffect } from "react";
import ExerciseDisplay from "./ExerciseDisplay";
import classes from "./SearchBar.module.css"
const Back = () => {
  const [backData, setBackData] = useState();
  const [backSearchQuery, setBackSearchQuery] = useState("");
  const backExercises = async () => {
    const response = await fetch("/back");
    const data = await response.json();
    console.log(data);
    setBackData(data);
  };
  useEffect(() => {
    backExercises();
  }, []);

  if (backData === undefined) {
    return <h1> Loading....</h1>;
  }
  const filteredBackExercises = backData
    .filter((back) => {
      if (backSearchQuery === "") {
        return back;
      } else if (
        back.metadata.name.toLowerCase().includes(backSearchQuery.toLowerCase())
      ) {
        return back.metadata.name;
      }
    })
    .map((back) => (
      <ExerciseDisplay
        id={back.metadata.uuid}
        key={back.metadata.uuid}
        name={back.metadata.name}
        image={back.metadata.image}
        tags={back.metadata.benefits}
        description={back.metadata.description}
      />
    ));

  const backSearchHandler = (event) => {
    setBackSearchQuery(event.target.value);
  };
  return (
    <>
      <input
      className={classes.searchBar}
        style={{ textAlign: "center" }}
        placeholder="Search Exercise"
        onChange={backSearchHandler}
        value={backSearchQuery}
      />
      {filteredBackExercises}
    </>
  );
};

export default Back;
