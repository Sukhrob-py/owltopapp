import React from "react";
import { MdSort } from "react-icons/md";
import Image from "next/image";

import { BsFillTrophyFill, BsFillStarFill } from "react-icons/bs";

function CourseLayout({ info }) {
  return (
    <div className="course-layout-wrapper">
      <div className="course-layout">
        <div className="course__top">
          <h1 className="course__title">Курсы по {info.course_title}</h1>
          <div className="sorting">
            <button>
              <MdSort className="icon" />
              По рейтингу
            </button>
            <button>По цене </button>
          </div>
        </div>
        <div className="about__course">
          <div className="about__course__top">
            <div className="about__course__top__left">
              <div className="course__img">
                <Image className="img" src={info.course_img} alt="" />
              </div>
              <div className="course__top__detail">
                <h4 className="course__top__title">
                  {info.course_top_title}
                  <div className="cup">
                    <div className="trophy">
                      <BsFillTrophyFill />
                    </div>
                  </div>
                </h4>
                <div className="technologies">
                  {info.technologies.length > 0
                    ? info.technologies.map((technology) => {
                        return (
                          <p className="technologies__item">{technology}</p>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
            <div className="about__course__top__right">
              <div className="cost">
                <h5 className="cost__top">{info.cost}</h5>
                <p className="cost__btm">цена</p>
              </div>
              <div className="for_credit cost">
                <h5 className="cost__top">
                  {info.for_credit} <span>/мес</span>{" "}
                </h5>
                <p className="cost__btm">в кредит</p>
              </div>
              <div className="rating">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((e) => {
                    if (info.rating >= e) {
                      return <BsFillStarFill className="star fill" />;
                    } else {
                      return <BsFillStarFill className="star not-fill" />;
                    }
                  })}
                </div>
                <p className="comments">{info.comments} отзывов</p>
              </div>
            </div>
          </div>
          <div className="about__course__body">
            <div className="about__course__body__summary">
              <p className="about__course__body__summary__txt">
                Студенты освоят не только hard skills, необходимые для работы
                веб-дизайнером, но и soft skills — навыки, которые позволят
                эффективно взаимодействовать в команде с менеджерами,
                разработчиками и маркетологами. Выпускники факультета могут
                успешно конкурировать с веб-дизайнерами уровня middle.
              </p>
            </div>
            <div className="about__course__body__details">
              <div className="about__course__body__details__left">
                <div className="about__course__body__details__left__items">
                  <div className="item">
                    <h5 className="item__title">Документ об окончании</h5>
                    <div className="dots"></div>
                    <p className="item__value">Диплом</p>
                  </div>
                  <div className="item">
                    <h5 className="item__title">Сложность</h5>
                    <div className="dots"></div>
                    <p className="item__value">Начальная</p>
                  </div>
                  <div className="item">
                    <h5 className="item__title">Длительность</h5>
                    <div className="dots">  </div>
                    <p className="item__value">5 месяцев</p>
                  </div>
                  <div className="item last">
                    <p className="last__txt">Гарантия трудоустройства</p>
                  </div>
                </div>
              </div>
              <div className="about__course__body__details__right">
                <div className="about__course__body__details__right__items">
                  <div className="right__items__item">
                    <h5 className="right__items__item__title">Преимущества</h5>
                    <p className="right__items__item__txt">
                      Хорошо структурирован курс, быстрый отклик преподователей,
                      качество подачи материала
                    </p>
                  </div>
                  <div className="right__items__item">
                    <h5 className="right__items__item__title">Недостатки</h5>
                    <p className="right__items__item__txt">
                      Некоторое темы раскрыты не до конца
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__course__body__btns">
              <button className="about__course__body__btns__btn">Узнать подробнее</button>
              <button className="about__course__body__btns__btn">Читать отзывы</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseLayout;
