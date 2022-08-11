import { useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import CoinItem from "../../components/CoinItem";
import { useWatchlist } from "../../context/WatchlistContext";
import { getWatchlistedCoins } from "../../services/requests";

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  // console.log(watchlistCoinIds);

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join("%2C");

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinData = await getWatchlistedCoins(
      1,
      transformCoinIds()
    );
    setCoins(watchlistedCoinData);
    setLoading(false);
  };

  useEffect(() => {
    if (watchlistCoinIds.length > 0) {
      fetchWatchlistedCoins();
    }
  }, [watchlistCoinIds]);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="white"
          onRefresh={watchlistCoinIds.length > 0 ? fetchWatchlistedCoins : null}
        />
      }
    />
  );
};

export default WatchlistScreen;
