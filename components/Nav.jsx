import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoSchoolSharp, IoBookSharp } from "react-icons/io5";
import { AiFillCloud } from "react-icons/ai";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

import Logo from "../assets/images/logo.svg";

function Nav() {
  useEffect(() => {
    console.log(1);
    const navLinksItemAll = document.querySelectorAll(".nav__links__item");
    for (const i of navLinksItemAll) {
      i.addEventListener("click", (e) => {
        if (e.target.className=='title') {
          for (const j of navLinksItemAll) {
            j.children[1].style.display='none'
          }
          e.target.parentElement.nextElementSibling.style.display="block"
        }
      });
    }
  });
  return (
    <div className="nav">
      <div className="nav__logo">
        <Image src={Logo} alt="freer" />
      </div>
      <div className="nav__search">
        <input type="text" placeholder="Поиск..." />
        <button>
          <GoSearch />
        </button>
      </div>
      <div className="nav__links">
        <div className="nav__links__item">
          <div className="nav__links__item__top">
            <div className="icon">
              <IoSchoolSharp />
            </div>
            <h3 className="title">Курсы</h3>
          </div>
          <div className="nav__links__item__body course-body">
            <div className="body__links">
              <Link href="/design">ДИЗАЙН</Link>
              <Link href="/photoshop">Photoshop</Link>
              <Link href="/aftereffect">AfterEffect</Link>
              <Link href="/illustrator">Illustrator</Link>
              <Link href="/figma">Figma</Link>
              <Link href="/development">РАЗРАБОТКА</Link>
              <Link href="/analitics">АНАЛИТИКА</Link>
              <Link href="/marketing">МАРКЕТИНГ</Link>
            </div>
          </div>
        </div>
        <div className="nav__links__item">
          <div className="nav__links__item__top">
            <div className="icon">
              <AiFillCloud />
            </div>
            <h3 className="title">Сервисы</h3>
          </div>
          <div className="nav__links__item__body services-body">
            <div className="body__links">
              <Link href="/design">ДИЗАЙН</Link>
              <Link href="/photoshop">Photoshop</Link>
              <Link href="/aftereffect">AfterEffect</Link>
              <Link href="/illustrator">Illustrator</Link>
              <Link href="/figma">Figma</Link>
              <Link href="/development">РАЗРАБОТКА</Link>
              <Link href="/analitics">АНАЛИТИКА</Link>
              <Link href="/marketing">МАРКЕТИНГ</Link>
            </div>
          </div>
        </div>
        <div className="nav__links__item">
          <div className="nav__links__item__top">
            <div className="icon">
              <IoBookSharp />
            </div>
            <h3 className="title">Книги</h3>
          </div>
          <div className="nav__links__item__body books-body">
            <div className="body__links">
              <Link href="/design">ДИЗАЙН</Link>
              <Link href="/photoshop">Photoshop</Link>
              <Link href="/aftereffect">AfterEffect</Link>
              <Link href="/illustrator">Illustrator</Link>
              <Link href="/figma">Figma</Link>
              <Link href="/development">РАЗРАБОТКА</Link>
              <Link href="/analitics">АНАЛИТИКА</Link>
              <Link href="/marketing">МАРКЕТИНГ</Link>
            </div>
          </div>
        </div>
        <div className="nav__links__item">
          <div className="nav__links__item__top">
            <div className="icon">
              <GiCardboardBoxClosed />
            </div>
            <h3 className="title">Товары</h3>
          </div>
          <div className="nav__links__item__body products-body">
            <div className="body__links">
              <Link href="/design">ДИЗАЙН</Link>
              <Link href="/photoshop">Photoshop</Link>
              <Link href="/aftereffect">AfterEffect</Link>
              <Link href="/illustrator">Illustrator</Link>
              <Link href="/figma">Figma</Link>
              <Link href="/development">РАЗРАБОТКА</Link>
              <Link href="/analitics">АНАЛИТИКА</Link>
              <Link href="/marketing">МАРКЕТИНГ</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
