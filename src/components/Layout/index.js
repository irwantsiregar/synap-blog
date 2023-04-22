import Header from "../Header";
import Login from "../Login";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className={styles.layout}>
        <Login />
        {children}
      </main>
    </div>
  );
}
