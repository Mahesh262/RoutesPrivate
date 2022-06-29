import { Close, Search } from '@mui/icons-material';
import React, { useState } from 'react'

const Searchba = ({data}) => {
     const[filterData, setFilterData]= useState([]);
     const [worDs, setWords]= useState('')
   const handleFilters = (e)=>{
    const searchWord= e.target.value;
    setWords(searchWord);

    const newFilter = data.filter((value)=>{
        return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if(searchWord === ""){
        setFilterData([]);

    } else{
        setFilterData(newFilter)
    };

   }

   const clearInput =()=>{
    setFilterData([]);
    setWords('');

 }
  return (
    <>
    <div>
      <input type ="text" value={worDs}  placeholder='Enter books' onChange={handleFilters} />  
    </div>
     <div>
     {filterData.length === 0 ?(
     <Search/>
     ):
     (<Close id ="clearbtn" onClick={clearInput}/>)
     
     }
     </div>
      {filterData.length !==0 && (<div>
             {filterData.slice(0,15).map((value,index)=>{
                return (
                   <a href={value.link}  target="_blan" className="dataItem" key={index}>
                    <p>{value.title}</p>
                   </a> 
                )
             })}
      </div>)}
     
    
    </>
  )
}

export default Searchba