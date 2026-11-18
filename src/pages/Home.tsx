import { useEffect } from "react";
import { useLocation } from "react-router";
import { About } from "../sections/About";
import { Certifications } from "../sections/Certifications";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";

export function Home() {
  const { hash } = useLocation();

  // /#experience のような URL で開いたとき、該当セクションへスクロール
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    el?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
