import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ListComponent from "../Components/ListComponent";
import ListInput from "../Components/ListInput";

const ListScreen = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [showInput, setShowInput] = useState(false);

  const addItem = (text) => {
    if (!text || text.trim() === "") return;

    if (editingItem !== null && items[editingItem]) {
      // Update existing item
      const updatedItems = items.map((item, index) =>
        index === editingItem ? { ...item, text } : item
      );
      setItems(updatedItems);
      setEditingItem(null);
    } else {
      // Add new item
      setItems([...items, { text }]);
    }
    setShowInput(false);
  };

  const deleteItem = (index) => {
    if (index >= 0 && index < items.length) {
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
    }
  };

  const editItem = (index) => {
    setEditingItem(index);
    setShowInput(true);
    // Scroll to top to show the input field
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <ListInput
        onSubmit={addItem}
        initialValue={
          editingItem !== null && items[editingItem]
            ? items[editingItem].text
            : ""
        }
        showInput={showInput || editingItem !== null}
        onShowInput={() => setShowInput(true)}
        buttonLabel={editingItem !== null ? "Update" : "Add"}
      />
      <ScrollView ref={(ref) => (this.scrollViewRef = ref)}>
        {items.map((item, index) => (
          <ListComponent
            key={index}
            item={item}
            onEdit={() => editItem(index)}
            onDelete={() => deleteItem(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default ListScreen;
