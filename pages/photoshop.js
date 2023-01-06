import React from "react";
import CourseLayout from "../components/CourseLayout";

import PhotodhopCourse from "../assets/images/photoshop-course.png";

function photoshop() {
  const info = {
    course_title: "Photoshop",
    course_img: PhotodhopCourse,
    course_top_title: "Профессия дизайнер от 0 до PRO",
    technologies: ["Photoshop", "Дизайн"],
    cost: "24 000 ₽",
    for_credit: "5 000 ₽",
    comments: 20,
    duration: "5 месяцев",
    complexity: "Начальная",
    graduation_document: "Диплом",
    rating: 4,
  };
  return (
    <div className="main-content">
      <CourseLayout info={info} />
    </div>
  );
}

export default photoshop;
