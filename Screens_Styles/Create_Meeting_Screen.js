import React, { useEffect } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { BLUE_COLOR, WHITE_COLOR } from "../Themes/themeColors";

const CreateMeetingScreen = ({ meeting = undefined, navigation }) => {
  const [meetings, setMeetings] = React.useState(null);

  const [meetingInput, setMeetingInput] = React.useState({}); //you must endup with a single object that combines all the vars

  const [description, setDescrition] = React.useState("");
  const [age, setAge] = React.useState("");

  useEffect(() => {}, []);

  const onSubmit = () => {
    //put code here to handle the data bulding/ and server stuff
    //want to make sure that it was sucess before and validate
    //
    //console.log(meetingInput);
    //if building state by state variable, you want ot build the input first and then print
    // const input = {
    //description,
    //  age
    // }
  };

  const onStateChange = (field, value) => {
    setMeetingInput({ ...meetingInput, [field]: value });
  };

  const onDescriptionChange = (value) => {
    setMeetingInput({ ...meetingInput, description: value });
  };
  //insert scroll view,because not enough space..
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.centeredView}>
        <Text style={{ marginBottom: 15, textAlign: "center" }}>
          Make Meeting
        </Text>
        <TextInput
          label="Description"
          value={meetingInput.description}
          onChangeText={(value) => onStateChange("description", value)}
        ></TextInput>

        <TextInput
          label="Age"
          value={meetingInput.age}
          onChangeText={(value) => onStateChange("age", value)}
        ></TextInput>

        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MeetingsContainer: {
    flex: 1,
    paddingTop: "5%",
    marginHorizontal: 16,
    backgroundColor: WHITE_COLOR,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  SectionHeader: {
    backgroundColor: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    elevation: 4,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
  },
  item: {
    backgroundColor: WHITE_COLOR,
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: BLUE_COLOR,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    alignContent: "center",
    marginLeft: 10,
    marginRight: 10,
    top: -70,
    height: 70,
    backgroundColor: "yellow",
  },
});

export default CreateMeetingScreen;
