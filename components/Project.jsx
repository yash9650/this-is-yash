import classes from './styles/Project.module.scss';

export default function Project() {
    return (
        <div className={classes.projectcontainer}>
            <div className={classes.projectblock}>
                <span className={classes.project}>
                    <h2 style={{ margin: "10px" }}>
                        StopNShop
                    </h2>
                    {/* <hr /> */}
                    <article className={classes.article} style={{ margin: "10px" }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rerum consectetur incidunt, doloribus dolor tenetur iusto magni placeat.
                    </article>
                </span>
                <span className={classes.project}>
                    <h2 style={{ margin: "10px" }}>
                        First-step
                    </h2>
                    {/* <hr /> */}
                    <article className={classes.article} style={{ margin: "10px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rerum consectetur incidunt, doloribus dolor tenetur iusto magni placeat.
                    </article>
                </span>
                <span className={classes.project}>
                    <h2 style={{ margin: "10px" }}>
                        Chat-App
                    </h2>
                    {/* <hr /> */}
                    <article className={classes.article} style={{ margin: "10px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rerum consectetur incidunt, doloribus dolor tenetur iusto magni placeat.
                    </article>
                </span>
            </div>
        </div>
    );
}