import React, { useEffect } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { BLUE_COLOR } from "../Themes/themeColors";

const CreateMeetingModal = ({ modalVisible, setModalVisible }) => {
  useEffect(() => {
    console.log("Card");
  }, []);
  const [temp, setTemp] = React.useState(null);
  const onSubmit = () => {
    //put code here to handle the data bulding/ and server stuff
    //want to make sure that it was sucess before and validate
    setModalVisible(!modalVisible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ marginBottom: 15, textAlign: "center" }}>
            Make Meeting
          </Text>

          <Pressable style={styles.button} onPress={onSubmit}>
            <Text style={styles.textStyle}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  ); ///modify this line to include a view with a bunch of children stuff, so container views, and style them to represent your meeting card
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: BLUE_COLOR,
  },
});

export default CreateMeetingModal;
