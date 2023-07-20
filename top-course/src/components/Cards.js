import Card from "./Card";
import React, { useState } from "react";
function Cards(props) {
    let course = props.course;
    let check = props.check;
    const [selectCourse,setSelectCourse] = useState([]);
    function getCourse(){
    if(check === "All"){
            let allCourses =[]; 
            Object.values(course).forEach((array)=>{
                array.forEach((courseData)=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            return course[check];
        }
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">{
                getCourse().map((cour)=>{
                    return(
                        <Card key={cour.id} cour ={cour} selectCourse={selectCourse} setSelectCourse={setSelectCourse}></Card>
                    )
                })
            }
        </div>
    );
}
export default Cards;