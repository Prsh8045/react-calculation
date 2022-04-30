import React, { useEffect } from 'react'

const Covid = () => {
    const getcovidData= async()=>{
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
              const actualData= await res.json();
              console.log(actualData);
        }
        catch(err ){
            console.log(err);
        }
        
    }
    useEffect(() =>{
        getcovidData();

    },[]);
  return (
    <>
      <h1>LIVE</h1>
      <h2>COVID-19 CORONVIRUS tracker</h2>
    </>
  )
}

export default Covid
