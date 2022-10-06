import { useState, useEffect } from "react";
import ExerciseDisplay from "./ExerciseDisplay";
import classes from "./SearchBar.module.css";
const Abdominals = () => {
  const [abdominalData, setAbdominalData] = useState();
  const [abdominalSearchQuery, setAbdominalSearchQuery] = useState("");
  const abdominalExercises = async () => {
    const response = await fetch("/abdominals");
    const data = await response.json();
    console.log(data);
    setAbdominalData(data);
  };
  useEffect(() => {
    abdominalExercises();
  }, []);

  if (abdominalData === undefined) {
    return <h1> Loading....</h1>;
  }
  const filteredAbdominalExercises = abdominalData
    .filter((abdominal) => {
      if (abdominalSearchQuery === "") {
        return abdominal;
      } else if (
        abdominal.metadata.name.toLowerCase().includes(abdominalSearchQuery.toLowerCase())
      ) {
        return abdominal.metadata.name;
      }
    })
    .map((abdominal) => (
      <ExerciseDisplay
        id={abdominal.metadata.uuid}
        key={abdominal.metadata.uuid}
        name={abdominal.metadata.name}
        image={abdominal.metadata.image}
        tags={abdominal.metadata.benefits}
      />
    ));
  const abdominalExerciseHandler = (event) => {
    setAbdominalSearchQuery(event.target.value);
  };
  // TODO add filter
  return (
    <>
      <input
        className={classes.searchBar}
        style={{ textAlign: "center" }}
        placeholder="Search Exercise"
        onChange={abdominalExerciseHandler}
        value={abdominalSearchQuery}
      />
      {filteredAbdominalExercises}
    </>
  );
};

export default Abdominals;
