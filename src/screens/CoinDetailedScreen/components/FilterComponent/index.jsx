import { memo } from "react";
import { View, Text, Pressable } from "react-native";

const FilterComponent = ({
  filterText,
  filterDay,
  selectedRange,
  setSelectedRange,
}) => {
  const isFilterSelected = (filter) => filter === selectedRange;

  console.log("pressed");
  return (
    <Pressable
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: isFilterSelected(filterDay)
          ? "#1e1e1e"
          : "transparent",
      }}
      onPress={() => setSelectedRange(filterDay)}
    >
      <Text style={{ color: isFilterSelected(filterDay) ? "white" : "grey" }}>
        {filterText}
      </Text>
    </Pressable>
  );
};

export default memo(FilterComponent);
