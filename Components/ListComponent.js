import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ListComponent = ({ item, onEdit, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onEdit}
          style={[styles.button, styles.editButton]}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDelete}
          style={[styles.button, styles.deleteButton]}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
  },
  deleteButton: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default ListComponent;
