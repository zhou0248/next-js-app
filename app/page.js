import Image from "next/image";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <Form />
    </main>
  );
}
