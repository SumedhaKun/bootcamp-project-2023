import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className="logo">
                <a href="index.html">Sumedha's Website</a>
            </h1>
      <nav>
      <ul className={style.navlist}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
      </nav>
      </header>

  );
}