import styles from "./Footer.module.css";
export default function Footer({ completedTodos, IncompletedTodos }) {
  return (
    <div>
      <h1 className={styles.footer}>
        Completed ToDOs : {completedTodos} Incompleted ToDOs :{" "}
        {IncompletedTodos}
      </h1>
    </div>
  );
}
