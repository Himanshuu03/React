import Card from "./Card";
import React, { useState ,useEffect} from "react";
import Error from './Error';
function Cards(props) {
    let course = props.course;
    const [select,setSelect] = useState(false);
    useEffect(()=>{
        if(course === null){
            setSelect(true);
        }
    },[course])
    let check = props.check;
    const [selectCourse,setSelectCourse] = useState([]);
        function getCourse(){
            if (course === null || course === undefined) {
                return [];
              }
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
        <div>
            {select ? 
                (<Error></Error>)
            :(<div className="flex flex-wrap justify-center gap-4 mb-4">
                {
                        getCourse().map((cour)=>{
                            return(
                                <Card key={cour.id} cour ={cour} selectCourse={selectCourse} setSelectCourse={setSelectCourse}></Card>
                            )
                        })
                }
                </div>)}
        </div>
    );
}
export default Cards;
