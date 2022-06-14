import styles from "../css/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loadingPage}>
      <h1 className={styles.loadingTxt}>Please Wait...</h1>
    </div>
  );
}

export default Loading;
