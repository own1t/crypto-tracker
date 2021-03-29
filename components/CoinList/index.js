import Coin from "../Coin";
import styles from "./CoinList.module.css";

export default function CoinList({ data }) {
  return (
    <div className={styles.content_container}>
      <div className={styles.header}>
        <div className={styles.header_list}>
          <div className={styles.header_item}>
            <p className={styles.header_name}>Asset</p>
          </div>
          {/* <div className={styles.header_item}>
            <p className={styles.header_symbol}>Symbol</p>
          </div> */}
          <div className={styles.header_item}>
            <p className={styles.header_price}>Price</p>
          </div>
          <div className={styles.header_item}>
            <p className={styles.header_priceChange}>Price Change</p>
          </div>
          <div className={styles.header_item}>
            <p className={styles.header_volume}>Volume</p>
          </div>
          <div className={styles.header_item}>
            <p className={styles.header_marketCap}>Market Cap</p>
          </div>
        </div>
      </div>
      {data.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketCap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}
