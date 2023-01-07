import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoSchoolSharp, IoBookSharp } from "react-icons/io5";
import { AiFillCloud } from "react-icons/ai";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";

import Logo from "../assets/images/logo.svg";

function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const navLinksItemAll = document.querySelectorAll(".nav__links__item");
    for (const i of navLinksItemAll) {
      i.addEventListener("click", (e) => {
        if (e.target.className == "title") {
          for (const j of navLinksItemAll) {
            j.children[1].style.display = "none";
          }
          e.target.parentElement.nextElementSibling.style.display = "block";
        }
      });
    }
  });
  return (
    <>
      <div className={`nav ${open ? "nav--open" : ""}`}>
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
              <div
                className="body__links"
                onClick={(e) => {
                  if (e.target.className == "body__links__item") {
                    setTimeout(() => {
                      setOpen(false);
                    }, 500);
                  }
                }}
              >
                <Link className="body__links__item" href="/design">
                  ДИЗАЙН
                </Link>
                <Link className="body__links__item" href="/photoshop">
                  Photoshop
                </Link>
                <Link className="body__links__item" href="/aftereffect">
                  AfterEffect
                </Link>
                <Link className="body__links__item" href="/illustrator">
                  Illustrator
                </Link>
                <Link className="body__links__item" href="/figma">
                  Figma
                </Link>
                <Link className="body__links__item" href="/development">
                  РАЗРАБОТКА
                </Link>
                <Link className="body__links__item" href="/analitics">
                  АНАЛИТИКА
                </Link>
                <Link className="body__links__item" href="/marketing">
                  МАРКЕТИНГ
                </Link>
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
                <p>no item</p>
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
                <p>no item</p>
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
                <p>no item</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav nav2">
        <div className="nav__logo">
          <Image src={Logo} alt="freer" />
        </div>
        <div className="nav__burger">
          <RxHamburgerMenu className="burger" onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div
        className={`nav--close ${open ? "nav--close--open" : ""}`}
        onClick={() => setOpen(!open)}
      ></div>
    </>
  );
}

export default Nav;
