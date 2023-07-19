import Card from "./Card";
import React from "react";
function Cards({courses}) {
    let allCourses=[];
    const getCourse=()=>{
        Object.values(courses).forEach((e)=>{
            e.forEach((ev)=>{
                allCourses.push(ev);
            })
        })
        return allCourses;
    }
    return (
        <div>
            {
                getCourse().map((course)=>{
                    return(
                        <Card key={course.id} course={course}></Card>
                    )
                })
            }
        </div>
    );
}
export default Cards;