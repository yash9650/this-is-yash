import classes from "./styles/Project.module.scss";

export default function Project() {
  return (
    <div className={classes.projectcontainer}>
      <div className={classes.projectblock}>
        <a
          className={classes.project}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/yash9650/StopNShop"
        >
          <h2 style={{ margin: "10px" }}>StopNShop</h2>
          {/* <hr /> */}
          <article className={classes.article} style={{ margin: "10px" }}>
            StopNShp is a campus website, the idea was to provide shops in our
            campus online. StopNShop contains features like, Login/Register, Add
            items to card, Order products and many more.
          </article>
        </a>

        <a
          className={classes.project}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/yash9650/first-step"
        >
          <h2 style={{ margin: "10px" }}>First-step</h2>
          {/* <hr /> */}
          <article className={classes.article} style={{ margin: "10px" }}>
            FristStep is a medical website. The idea is to provide a platform
            where a user can search disease by disease name or its symptoms. Our
            website will provide home Remedies and other details about the
            disease.
          </article>
        </a>
        <a
          className={classes.project}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/yash9650/chatapp"
        >
          <h2 style={{ margin: "10px" }}>Chat-App</h2>
          {/* <hr /> */}
          <article className={classes.article} style={{ margin: "10px" }}>
            ChatApp allows the student to intract with new people/student in
            their campus. The idea was to connect students in the same
            university or different university with each other so they can study
            together and help each other at the time of examinations.
          </article>
        </a>
      </div>
    </div>
  );
}
