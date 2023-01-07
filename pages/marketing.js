import React from 'react'
import CourseLayout from "../components/CourseLayout";
import PhotodhopCourse from "../assets/images/marketing.png";

function marketing() {
  const info = {
    course_title: "Development",
    course_img: PhotodhopCourse,
    course_top_title: "Профессия development",
    technologies: ["Photoshop", "Дизайн"],
    cost: "23 000 ₽",
    for_credit: "3 000 ₽",
    comments: 22,
    duration: "7 месяцев",
    complexity: "Начальная",
    graduation_document: "Диплом",
    rating: 3,
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

export default marketing