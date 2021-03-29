import Head from "next/head";
import Link from "next/link";
import { Assessment } from "@material-ui/icons";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Crypto-Tracker" }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/" passHref>
          <a className={styles.header_link}>
            <p className={styles.header_title}>Crypto-Tracker </p>
            <Assessment className={styles.header_icon} />
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
