import Image from 'next/image';
import GoogleMaps from '@/app/components/GoogleMaps';

import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/Vanlife Tracker Logo.svg"
          alt="Vanlife Tracker Logo"
          width={300}
          height={300}
          priority
        />
        <h1 className={styles.slogan}>Where Vanlifers meet</h1>
        <GoogleMaps className={styles.googlemap} />
      </main>
    </div>
  );
}

export default Home;
