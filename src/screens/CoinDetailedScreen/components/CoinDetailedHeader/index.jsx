import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinDetailedHeader = (props) => {
  const { image, symbol, marketCapRank } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={28}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.ticketContainer}>
        <Image source={{ uri: image }} style={{ width: 30, height: 30 }} />
        <Text style={styles.ticketTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <FontAwesome5 name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailedHeader;
