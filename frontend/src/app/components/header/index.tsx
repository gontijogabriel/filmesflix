"use client";
import { MagnifyingGlass, User } from "phosphor-react";
import { HeaderContainer, HeaderContent } from "./styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1075) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <h2
            className={pathname == "/" ? "active-link" : ""}
            onClick={() => setOpen(false)}
          >
            Aluga Car
          </h2>
        </Link>
        <nav className={open ? "actived" : ""}>
          <ul>
            <li
              className={pathname == "/gruposdecarros" ? "active-link" : ""}
              onClick={() => setOpen(false)}
            >
              Grupos De Carros
            </li>
            <li
              className={pathname == "/ofertas" ? "active-link" : ""}
              onClick={() => setOpen(false)}
            >
              Ofertas
            </li>
            <Link href={"/register"}>
              <li
                className={pathname == "/register" ? "active-link" : ""}
                onClick={() => setOpen(false)}
              >
                Cadastro
              </li>
            </Link>
            <Link href={"/login"}>
              <li
                className={pathname == "/login" ? "active-link" : ""}
                onClick={() => setOpen(false)}
              >
                Login
              </li>
            </Link>
            <li
              className={pathname == "/duvidas" ? "active-link" : ""}
              onClick={() => setOpen(false)}
            >
              Dúvidas
            </li>
          </ul>
          {open && (
            <div className="">
              <button className="acessar">
                <User size={28} color="#7d7373" />
                Acessar conta
              </button>
              <button className="assine">Assine já!</button>
            </div>
          )}
        </nav>
        <div className="input">
          <input type="text" placeholder="Search you Car" />
          <span>
            <MagnifyingGlass size={25} color="#756e6e" />
          </span>
        </div>
        <div className="button">
          <button className="acessar">
            <User size={28} color="#7d7373" />
            Acessar conta
          </button>
          <button className="assine">Assine já!</button>
        </div>
        <button
          className={open ? "mobile actived" : "mobile"}
          onClick={() => setOpen(!open)}
        >
          <hr className="one" />
          <hr className="two" />
          <hr className="tree" />
        </button>
      </HeaderContent>
    </HeaderContainer>
  );
};
