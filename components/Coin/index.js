import styles from "./Coin.module.css";
import Link from "next/link";

const Coin = ({
  name,
  price,
  symbol,
  marketCap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin_data}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>
                {name}({symbol.toUpperCase()})
              </h1>
            </div>

            {/* <div className={styles.coin_data}>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div> */}

            <div className={styles.coin_data}>
              <p className={styles.coin_price}>${price.toLocaleString()}</p>
            </div>

            <div className={styles.coin_data}>
              {priceChange < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
            </div>

            <div className={styles.coin_data}>
              <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
            </div>

            <div className={styles.coin_data}>
              <p className={styles.coin_marketCap}>
                ${marketCap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coin;
