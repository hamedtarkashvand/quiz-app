import React from 'react';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {CColor} from './../../Global/style';

const defaultValue = 5
const Progressbar = ({valueProgress=defaultValue}) =>{
    return  (
             <div className="progressbar">
              <CircularProgressbar
                maxValue={10}
                value={valueProgress}
                text={valueProgress}
                styles={buildStyles({
                  textColor: CColor.white,
                  textSize: "35px",
                  pathColor:CColor.grayEEE,
                  trailColor: CColor.green61F 
                })}
                strokeWidth={8}
              />
             </div>
     )}

export {Progressbar}