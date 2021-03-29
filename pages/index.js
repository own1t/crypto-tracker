import { useState } from "react";

import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";

export default function Home({ data }) {
  const [search, setSearch] = useState("");

  const filteredCoins = data.filter((coin) =>
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar
          type="text"
          placeholder="Search by Symbol"
          onChange={handleChange}
        />
        <CoinList data={filteredCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
  );

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
