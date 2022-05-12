import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Food Guide | Finding the best Restaurants in the World!",
  description:
    "Searching for worthwild restaurants by aggregating the reviews from Michelin, Google Reviews, Tripadvisor, and top Influncers.",
  keywords:
    "Michelin Guide, Mark Weins, Trever James, Food Ranger, Bangkok, Fine Dinning",
};
