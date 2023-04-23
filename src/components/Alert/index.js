import { FaCheck, FaInfoCircle } from "react-icons/fa";
import styles from "./Alert.module.css";

export default function Alert({ color, children }) {
  return (
    <div
      className={`my-2 px-3 py-3 rounded ${
        color === "success" ? styles.success : styles.warning
      }`}
    >
      {color === "success" ? (
        <FaCheck className={styles.icon_success} />
      ) : (
        <FaInfoCircle className={styles.icon_warning} />
      )}
      {children}
    </div>
  );
}
