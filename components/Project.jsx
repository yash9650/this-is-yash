import classes from './styles/Project.module.scss';

export default function Project() {
    return (
        <div className={classes.projectcontainer}>
            <div className={classes.projectblock}>
                <span className={classes.project}>
                    <h2 style={{ margin: "10px" }}>
                        StopNShop
                    </h2>
                    <hr />
                    <article style={{ margin: "10px" }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rerum consectetur incidunt, doloribus dolor tenetur iusto magni placeat inventore nihil enim sit amet ut itaque harum ad veritatis necessitatibus beatae?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex magni omnis aliquam sequi placeat voluptates eligendi quod inventore eos nam, sed itaque ipsa ut molestiae velit deserunt. Alias, amet?
                    </article>
                </span>
                <span className={classes.project}>
                    <h2 style={{ margin: "10px" }}>
                        First-step
                    </h2>
                    <hr />
                    <article style={{ margin: "10px" }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rerum consectetur incidunt, doloribus dolor tenetur iusto magni placeat inventore nihil enim sit amet ut itaque harum ad veritatis necessitatibus beatae?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex magni omnis aliquam sequi placeat voluptates eligendi quod inventore eos nam, sed itaque ipsa ut molestiae velit deserunt. Alias, amet?
                    </article>
                </span>
                <span className={classes.project}>
                    <h2 style={{ margin: "10px" }}>
                        Chat-App
                    </h2>
                    <hr />
                    <article style={{ margin: "10px" }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rerum consectetur incidunt, doloribus dolor tenetur iusto magni placeat inventore nihil enim sit amet ut itaque harum ad veritatis necessitatibus beatae?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex magni omnis aliquam sequi placeat voluptates eligendi quod inventore eos nam, sed itaque ipsa ut molestiae velit deserunt. Alias, amet?
                    </article>
                </span>
            </div>
        </div>
    );
}