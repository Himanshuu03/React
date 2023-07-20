import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
function Card(props) {
  let cour = props.cour;
  let selectCourse = props.selectCourse;
  let setSelectCourse = props.setSelectCourse;
  let desc = cour.description.length > 100 ? `${((cour.description).substring(0,100))}...`:(cour.description);
  function clickHandler(){
    if(selectCourse.includes(cour.id)){
        setSelectCourse((e) => (e.filter((cid) => (cid !== cour.id))));
      toast.warning("like removed");
    }
    else{
      if(selectCourse.length === 0){
        setSelectCourse([cour.id]);
      }
      else{
        setSelectCourse((prev)=>[...prev,cour.id])
      }
      toast.success("like added");
    }
  }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
              <img src={cour.image.url} alt="img"></img>
              <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                     {
                      !selectCourse.includes(cour.id) ? <FcLikePlaceholder fontSize="1.75rem"/> :<FcLike fontSize="1.75rem"/>
                     }
                </button>
              </div>
            </div>
            <div className='p-4'>
                  <p className="text-white font-semibold text-lg leading-6">{cour.title}</p>
                  <p className='mt-2 text-white'>{desc}</p>
            </div>
        </div>
    );
}
export default Card;