import { Suspense } from "react";
import { View, Text, FlatList } from "react-native";
import PortfolioAssetsList from "./components/PortfolioAssetsList";

const PortfolioScreen = () => {
  return (
    <View>
      <Suspense
        fallback={
          <Text style={{ color: "white" }}>Loading Please Wait...</Text>
        }
      >
        <PortfolioAssetsList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;
