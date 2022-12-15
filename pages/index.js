import Head from "next/head";
import Header from "../components/Header/Header";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import classes from "../styles/Home.module.scss";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>this.is.yash</title>
        <meta name="description" content="this is my personal website" />
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Header />
      <div className={classes.mycontainer}>
        <section id="myhome" className={classes.mysection}>
          <LandingPage />
        </section>
        <section id="about" className={classes.mysection}>
          <About />
        </section>
        <section id="projects" className={classes.mysection}>
          <Project />
        </section>
      </div>
    </>
  );
}
