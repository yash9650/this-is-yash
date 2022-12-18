import classes from "./styles/Landingpage.module.scss";
import CustomButton from "./ui/Button";

export default function LandingPage() {
  return (
    <>
      <div className={classes.landingpagecontainer}>
        <div className={classes.detailblock}>
          <h1 className={classes.heading}>
            Hi, I&apos;m Yash,
            <br />
            Web Developer
          </h1>
          <br />
          <span className={classes.block}>Full Stack | MERN developer</span>
          <br />
          <CustomButton>My Projects</CustomButton>
        </div>
        <div className={classes.imgblock}></div>
      </div>
      <div className={classes.container}>
        <div className={classes.chevron}></div>
        <div className={classes.chevron}></div>
        <div className={classes.chevron}></div>
      </div>
    </>
  );
}
