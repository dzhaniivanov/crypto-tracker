import { View, Text, Image } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const PortfolioAssetItem = ({ assetItem }) => {

  const {
    currentPrice,
    image,
    name,
    priceBought,
    priceChangePercentage,
    quantityBought,
    ticker,
  } = assetItem;
  console.log(assetItem)

  return (
    <View style={styles.coinContainer}>
      <Image source={{ uri: "" }} style={{ height: 30, width: 30 }} />
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.ticker}>{ticker}</Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>{currentPrice}</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name={"caretup"}
            size={12}
            color={"#16c784"}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: "#16c784", fontWeight: "600" }}>{priceChangePercentage}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>$80000</Text>
        <Text style={styles.ticker}>{quantityBought} {ticker}</Text>
      </View>
    </View>
  );
};

export default PortfolioAssetItem;
