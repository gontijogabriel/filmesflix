"use client";
import { MagnifyingGlass, User } from "phosphor-react";
import { HeaderContainer, HeaderContent } from "./styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";
import { defaultTheme } from "@/app/styles/themes/themeDefault";

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
    <HeaderContainer theme={defaultTheme}>
      <HeaderContent>
        <Link href="/">
          <h2
            className={pathname == "/" ? "active-link" : ""}
            onClick={() => setOpen(false)}
          >
            FilmesFlix  
          </h2>
        </Link>
        <nav className={open ? "actived" : ""}>
          <ul>
            <Link href={"/register"}>
              <li
                className={pathname == "/register" ? "active-link" : ""}
                onClick={() => setOpen(false)}
              >
                Registre seu filme
              </li>
            </Link>

            <Link href={"/movies"}>
              <li
                className={pathname == "/movies" ? "active-link" : ""}
                onClick={() => setOpen(false)}
              >
                Todos os filmes

              </li>
            </Link>
            <Link href={"/hot"}>
              <li
                className={pathname == "/hot" ? "active-link" : ""}
                onClick={() => setOpen(false)}
              >
                Hot
              </li>
            </Link>
            <Link href={"about"}>
              <li
                className={pathname == "/about" ? "active-link" : ""}
                onClick={() => setOpen(false)}
              >
                Sobre nós
              </li>
            </Link>
          </ul>
          {open && (
            <div className="">
              <Button size="small" className="acessar">
                <User size={28} color="#7d7373" />
                Acessar conta
              </Button>
              <Button size="small" className="assine">Assine já!</Button>
            </div>
          )}
        </nav>
        {pathname !== '/' ? <div className="input">
          <input type="text" placeholder="Procure o seu filme" />
          <span>
            <MagnifyingGlass size={25} color="#756e6e" />
          </span>
        </div> : ''}

        <div className="button">
          <Button sx={{
      width:'170px',
      height:'35px',
      padding:'0 6px 0 8px',
      background:'black',
      color: '#fe6f27',
      borderRadius:'8px',
      fontSize:'15px',
      '&:hover': {
        backgroundColor: '#fe6f27',
        color: 'black',
        border: '1px solid #fe6f27',
      },
      border: '1px solid #fe6f27',
      }}
      variant="outlined" size="small" >
       <User
      size={24}
      sx={{
        color: '#fe6f27',
        '&:hover': {
          color: 'black',
        },
      }}
    />
            Acessar conta
          </Button>
          <Button 
          sx={{
            width:'170px',
      height:'35px',
      padding:'0 6px 0 8px',
      background:'#fe6f27',
      color: 'black',
      borderRadius:'8px',
      fontSize:'15px',
      '&:hover': {
        backgroundColor: '#E64727',
        border: '1px solid #E64727',
      },
      border: '1px solid #fe6f27',
            }}
          size="small" variant="outlined">Cadastre-se!</Button>
        </div>
        <Button
          className={open ? "mobile actived" : "mobile"}
          onClick={() => setOpen(!open)}
        >
          <hr className="one" />
          <hr className="two" />
          <hr className="tree" />
        </Button>
      </HeaderContent>
    </HeaderContainer>
  );
};
