import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import styles from "./styles";
import { useRecoilState } from "recoil";
import { allPortfolioBoughtAssetsInStorage } from "../../atoms/PortfolioAssets";
import { getAllCoins } from "../../services/requests";

const AddNewAssetScreen = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
  const [assetsInStorage, setAssetsInStorage] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );
  const [loading, setLoading] = useState(false);
  const [selectedCoinId, setSelectedCoinId] = useState("");

  const onAddNewAsset = () => {};

  const fetchAllCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const allCoins = await getAllCoins();
    setAllCoins(allCoins);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllCoins();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchableDropdown
        items={allCoins}
        onItemSelect={(item) => setSelectedCoinId(item.id)}
        containerStyle={styles.dropdownContainer}
        itemStyle={styles.item}
        itemTextStyle={{ color: "white" }}
        resetValue={false}
        placeholder={selectedCoinId || "Select a coin..."}
        placeholderTextColor="white"
        textInputProps={{
          underlineColorAndroid: "transparent",
          style: styles.textInput,
        }}
      />
      {selectedCoinId && (
        <>
          <View style={styles.boughtQuantityContainer}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={{ color: "white", fontSize: 90 }}
                value={boughtAssetQuantity}
                placeholder="0"
                keyboardType="numeric"
                onChangeText={setBoughtAssetQuantity}
              />
              <Text style={styles.ticker}>BTC</Text>
            </View>
            <Text style={styles.pricePerCoin}>$40000 per coin</Text>
          </View>
          <Pressable style={styles.buttonContainer} onPress={onAddNewAsset}>
            <Text style={styles.buttonText}>Add New Asset</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default AddNewAssetScreen;
