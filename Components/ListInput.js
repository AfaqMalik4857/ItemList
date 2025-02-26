import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

const ListInput = ({
  onSubmit,
  initialValue = "",
  buttonLabel = "Add",
  showInput = false,
  onShowInput,
}) => {
  const [text, setText] = useState(initialValue);

  const handleSubmit = () => {
    if (text.trim() === "") {
      Alert.alert("Error", "Please enter an item");
      return;
    }
    onSubmit(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      {showInput ? (
        <>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Enter list item"
            placeholderTextColor="#999"
            autoFocus={true}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>{buttonLabel}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={onShowInput}
          style={[styles.button, styles.createButton]}
        >
          <Text style={styles.buttonText}>Create Item</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },
  button: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    marginLeft: 10,
  },
  createButton: {
    marginLeft: 120,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ListInput;
