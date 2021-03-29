import Layout from "../../components/Layout";
import styles from "./CoinDetail.module.css";

const CoinDetail = ({ coin }) => {
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <div className={styles.coin_data}>
            <img
              src={coin.image.large}
              alt={coin.name}
              className={styles.coin_image}
            />
            <h1 className={styles.coin_name}>
              {coin.name}({coin.symbol.toUpperCase()})
            </h1>
          </div>

          <div className={styles.coin_data}>
            <p className={styles.coin_price}>
              ${coin.market_data.current_price.usd.toLocaleString()}
            </p>
          </div>

          <div className={styles.coin_data}>
            {coin.market_data.price_change_percentage_24h < 0 ? (
              <>
                <p className={styles.coin_priceChange}>Price Change(24H):</p>
                <p className={(styles.coin_priceChange, styles.red)}>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              </>
            ) : (
              <p className={(styles.coin_priceChange, styles.green)}>
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
          </div>

          <div className={styles.coin_data}>
            <p className={styles.coin_volume}>
              Volume: ${coin.market_data.total_volume.usd.toLocaleString()}
            </p>
          </div>

          <div className={styles.coin_data}>
            <p className={styles.coin_marketCap}>
              Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoinDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
