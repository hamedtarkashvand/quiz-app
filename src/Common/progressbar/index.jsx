import React from 'react';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {CColor} from './../../Global/style';

const Progressbar = ({value=5}) =>{
    return  (
           <div className="wrapper-progressbar">
             <div className="progressbar">
              <CircularProgressbar
                maxValue={10}
                value={value}
                text={`${value}`}
                strokeWidth={5}
                styles={buildStyles({
                  textColor: CColor.white,
                  textSize: "35px",
                  pathColor:CColor.grayEEE,
                  trailColor: CColor.green61F 
                })}
                strokeWidth={8}
              />
             </div>
           </div>
     )}

export default Progressbar