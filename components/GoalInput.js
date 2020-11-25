import React, { useState } from "react";
import { View, Button, TextInput, Modal, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [entredGoal, setEntredGoal] = useState("");

  function goalInputHandler(entredText) {
    setEntredGoal(entredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(entredGoal);
    setEntredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Coding is an art"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  button: {
    width: "40%",
  },
});

export default GoalInput;
