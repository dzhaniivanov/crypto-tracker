import { View, Text,FlatList } from "react-native";
import CoinItem from "../../components/CoinItem";
import { useWatchlist } from "../../context/WatchlistContext";

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  console.log(watchlistCoinIds);
  return (
    <FlatList 
    data={watchlistCoinIds}
    renderItem={({ item }) => <CoinItem marketCoin={item} />}

    />
  );
};

export default WatchlistScreen;
