// import { Close, Search } from '@mui/icons-material';
// import React, { useState } from 'react'

// const Searchba = ({data}) => {

//      const[filterData, setFilterData]= useState([]);
//      const [worDs, setWords]= useState('')
//    const handleFilters = (e)=>{
//     const searchWord= e.target.value;
//     setWords(searchWord);
     

//     const newFilter = data.filter((value)=>{
//         return value.title.toLowerCase().includes(searchWord.toLowerCase())
//     });

//     if(searchWord === ""){
//         setFilterData([]);

//     } else{
//         setFilterData(newFilter)
//     };

//    }

//    const clearInput =()=>{
//     setFilterData([]);
//     setWords('');

//  }
//   return (
//     <>
//     <div>
//       <input type ="text" value={worDs}  placeholder='Enter books' onChange={handleFilters} />  
//     </div>
//      <div style={{display:"flex",}}>
//      {filterData.length === 0 ?(
//      <Search/>
//      ):
//      (<Close id ="clearbtn" onClick={clearInput}/>)
     
//      }
//      </div>
//       {filterData.length !==0 && (<div>
//              {filterData.slice(0,15).map((value,index)=>{
//                 return (
//                    <a href={value.link}  target="_blan" className="dataItem" key={index}>
//                     <p>{value.title}</p>
//                    </a> 
//                 )
//              })}
//       </div>)}
     
    
//     </>
//   )
// }

// export default Searchba



import { Cancel, Search } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Searchba = () => {
   const [countries, setCountries]= useState([])
 const [moviesMatch, setMoviesMatch]= useState([])
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>setCountries(res.data)).catch(error=>console.log(error.message))
  },[])
   
  const  searchs = (text)=>{
      let matches = countries.filter(coun=>{
        const regs = new RegExp(`${text}`,"gi");
        return  coun.title.match(regs) || coun.body.match(regs)
      })
       setMoviesMatch(matches)
  }
    const empts= ()=>{
       setMoviesMatch([])
    }
  console.log(countries)
  return (
    <>
    
    <input type="text" placeholder='enter text' onChange={(e)=> searchs(e.target.value)}/>
      {moviesMatch.length ===0? (<Search/>):(<Cancel onClick={empts}/>)}

     {moviesMatch && moviesMatch.map((item,index)=>{
      return (<li key={index}>{item.title}</li>)
     })}
    </>
  )
}

export default Searchba

