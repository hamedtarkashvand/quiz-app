import React from 'react';

export const ListOptions = () =>{


    return (
        <div className="list-items">
        <ul className="list">
          {
            answers.map((answer)=>(
              <li  key={answer} className="item">
                <Item
                  key={answer} 
                  disabled={disabled}                
                  lable={answer}
                  className={getClass(answer)}
                  onClick={handleListItemClick}
                  />
            </li>
            ))
          }
        </ul>
    </div>
    )

}