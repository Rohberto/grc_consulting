"use client"
import React from 'react';
import Header from "../../Components/Header/Header.jsx";
import Navigation from "../../Components/Learning/Learning_id/Navigation/Navigation.jsx";
import {useParams} from 'next/navigation';
import {levels} from "../../utils";
import CourseDetail from '../../Components/Learning/Learning_id/CourseDetail/CourseDetail.jsx';
import Related from '@/app/Components/Learning/Learning_id/Related/Related.jsx';

const page = () => {
   const params = useParams();
  const id = params.id;
   function findCourseById(id) {
    for (const level of levels) {
      const found = level.content.find((course) => course.id === id);
      if (found) {
        return found;
      }
    }
    return null;
  }
   const course = findCourseById(id);


  return (
    <div>
        <Header/>
        <Navigation title={course?.title}/>
        <CourseDetail description={course?.description} image={course?.image}/>
        <Related/>
    </div>
  )
}

export default page;