import classes from './styles/About.module.scss';

export default function About() {
    return (
        <div className={classes.aboutpagecontainer}>
            <div className={classes.aboutblock}>
                <h2>About me</h2>
                <span>
                    <p>
                    I am a B.tech Computer Science final year student.
                    I like to build web apps and work on new technologies.
                    My tech stack contain technologies like React, Node, Express and MongoDB.

                    </p>
                </span>
            </div>
        </div>
    );
}