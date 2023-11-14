import React from 'react';

export default function PhotoOfDay(props){

    const { nasaData} = props;
    return(

        <div style ={{
            backgroundColor :'lightblue',
        }}>
            {nasaData && (<>
                <h2 >{nasaData.title}</h2>
            <img src={nasaData.url}/>
            <p>{nasaData.explanation}</p></>)}
          
        </div>
    )
}