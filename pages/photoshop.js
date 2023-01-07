import React from "react";
import CourseLayout from "../components/CourseLayout";

import PhotodhopCourse from "../assets/images/photoshop-course.png";

function photoshop() {
  const info = {
    course_title: "Photoshop",
    course_img: PhotodhopCourse,
    course_top_title: "Профессия photoshop от 0 до PRO",
    technologies: ["Photoshop", "Дизайн"],
    cost: "19 900 ₽",
    for_credit: "3 500 ₽",
    comments: 37,
    duration: "3 месяцев",
    complexity: "Начальная",
    graduation_document: "Диплом",
    rating: 4,
    comment__owner: "Sukhrob Ovlayev:",
    comment__txt:
      "The LABEL tag comes in our help because has such behaviour and is allowed tohe LABEL tag comes in our help because has such behaviour and is allowed tohe LABEL tag comes in our help because has such behaviour and is allowed tohe LABEL tag comes in our help because has such behaviour and is allowed tohe LABEL tag comes in our help because has such behaviour and is allowed tohe LABEL tag comes in our help because has such behaviour and is allowed to contain the input elements it must address to. Its default style is the one of inline elements, so, giving to the label a block display style we can avail ourselves of the automatic 100% width including padding and borders, while the inner textarea has no border, no padding and a 100% width.",
  };
  return (
    <div className="main-content">
      <CourseLayout info={info} />
    </div>
  );
}

export default photoshop;
