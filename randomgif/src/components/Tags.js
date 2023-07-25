import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export const Tags = () => {

    // const [gif,setGif] = useState("");
    // const [loading ,setLoading] = useState(false);
    const [tag,setTag] = useState("car");
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect(()=>{
    //     fetchData();
    // },[])
    const {gif,loading,fetchData} = useGif(tag); 
    function clickHandler(){
        fetchData(tag); 
    }
    function changeHandler(event){
        setTag(event.target.value);
    }
  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} Gif</h1>
       {
        loading ?(<Spinner></Spinner>):(<img src={gif} alt='gif' width="450px" ></img>)
       } 

       <input 
       className='w-10/12 rounded-lg text-lg py-2 mb-[3px] text-center'
       onChange={changeHandler}
       value={tag}
       />
        <button className='w-10/12 bg-blue-100 rounded-lg text-lg py-2 mb-[20px]' 
        onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}
