import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [entredGoal, setEntredGoal] = useState("");
  const [coursesGoals, setCoursesGoals] = useState([]);

  function goalInputHandler(entredText) {
    setEntredGoal(entredText);
  }

  const addGoalHandler = () => {
    setCoursesGoals((currentGoals) => [
      ...coursesGoals,
      { id: Math.random().toString(), value: entredGoal },
    ]);
  };

  return (
    <View>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
          />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={coursesGoals}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text> {itemData.item.value} </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingRight: 25,
    paddingLeft: 25,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
