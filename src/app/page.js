import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/Vanlife Tracker Logo.svg"
          alt="Van"
          width={300}
          height={300}
          priority
        />
      <h1>Where Vanlifers Connect</h1>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
