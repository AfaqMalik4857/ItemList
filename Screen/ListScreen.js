import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListComponent from "../Components/ListComponent";
import ListInput from "../Components/ListInput";
import {
  addItem,
  deleteItem,
  startEditing,
  updateItem,
  showInputField,
} from "../Redux/listSlice";

const ListScreen = () => {
  const dispatch = useDispatch();
  const { items, editingItem, showInput } = useSelector((state) => state.list);

  const handleAddOrUpdateItem = (text) => {
    if (!text.trim()) return;

    if (
      editingItem !== null &&
      editingItem >= 0 &&
      editingItem < items.length
    ) {
      // Update the existing item safely
      dispatch(updateItem({ index: editingItem, text }));
    } else {
      // Add a new item
      dispatch(addItem(text));
    }
    dispatch(showInputField(false)); // Hide input field after adding/updating item
  };

  return (
    <View style={styles.container}>
      {!showInput && (
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => dispatch(showInputField(true))}
        >
          <Text style={styles.buttonText}>Create Item</Text>
        </TouchableOpacity>
      )}

      {showInput && (
        <ListInput
          onSubmit={handleAddOrUpdateItem}
          initialValue={
            editingItem !== null ? items[editingItem]?.text || "" : ""
          }
          showInput={showInput}
          onShowInput={() => dispatch(showInputField(true))}
          buttonLabel={editingItem !== null ? "Update" : "Add"}
        />
      )}

      <ScrollView>
        {items.length > 0 ? (
          items.map((item, index) => (
            <ListComponent
              key={index}
              item={item}
              onEdit={() => dispatch(startEditing(index))}
              onDelete={() => dispatch(deleteItem(index))}
            />
          ))
        ) : (
          <View style={styles.emptyMessage}>
            <Text>No items found. Add a new item!</Text>
          </View>
        )}
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
  createButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    width: "40%",
    marginLeft: "30%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  emptyMessage: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default ListScreen;
