import React, { Component } from 'react';
import Result from '../result/result.jsx';
import '../results/results.module.css';

const Results = ({ categoryResults = [], handdleAddToItenerary, currentCategory }) => {
  console.log(categoryResults, 'RESULTS');
  return (
     <div className={styles.grid-container}>
       {categoryResults.map((result, i) => (
         <Result className='grid-item' key={i} dataResult={result} handdleAddToItenerary={handdleAddToItenerary} currentCategory={currentCategory} id={i}/>
       ))}
      </div>
  );
};

export default Results;