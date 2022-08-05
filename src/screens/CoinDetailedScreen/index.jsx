import { View, Text } from "react-native";
import coinData from "../../../assets/data/crypto.json";
import CoinDetailedHeader from "./components/CoinDetailedHeader";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coinData;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c874";

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailedHeader
        image={small}
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View
          style={{
            backgroundColor: percentageColor,
            borderRadius: 5,
            flexDirection: "row",
            paddingVertical: 5,
            paddingHorizontal: 2,
          }}
        >
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={"white"}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailedScreen;
