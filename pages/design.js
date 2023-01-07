import React from "react";
import CourseLayout from "../components/CourseLayout";
import PhotodhopCourse from "../assets/images/design.webp";

function design() {
  const info = {
    course_title: "Design",
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
    comment__owner: "Василий Раганов:",
    comment__txt:
      "Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!",
  };
  return (
    <div className="main-content">
      <CourseLayout info={info} />
    </div>
  );
}

export default design;
