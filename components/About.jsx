import classes from './styles/About.module.scss';

export default function About() {
    return (
        <div className={classes.aboutpagecontainer}>
            <div className={classes.aboutblock}>
                <h2>About me</h2>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Optio libero perspiciatis asperiores vitae alias ut omnis nihil, iure rem 
                    laborum hic ex velit illum mollitia eaque possimus harum? Numquam, nemo!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium velit alias. 
                    Veniam dolorum sint rerum eum. Dolor totam a sunt, voluptate neque illum placeat ab laborum, provident vero debitis.
                </span>
            </div>
        </div>
    );
}