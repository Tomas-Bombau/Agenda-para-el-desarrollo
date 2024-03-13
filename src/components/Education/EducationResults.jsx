import React from "react";
import style from "./EducationResults.module.css";

const EducationResults = ({subject}) => {

  return (
    <div className={style.card} style={{backgroundImage: `url(${subject.image})`}}> 
      <div className={style.cardContent}>
        <p className={style.cardTitle}> {subject.title}</p>
        <p className={style.cardDescription}> {subject.description}</p>
      </div>
</div>

  );
};

export default EducationResults;
