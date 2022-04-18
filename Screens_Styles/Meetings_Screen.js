import React, { useEffect, useState } from "react";
import { SafeAreaView, SectionList, StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { Button } from "react-native-paper";
import {
  createSectionData,
  getMyMeetingsFromServer,
} from "../api/meetings/meetings.api";
import MeetingListItem from "../Components/MeetingsListItem";
import { BLUE_COLOR, WHITE_COLOR } from "../Themes/themeColors";

const MeetingScreen = (props) => {
  const [meetings, setMeetings] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  

  useEffect(() => {
    const myMeetings = getMyMeetingsFromServer(); //this may take 3 sec to come back...

    setMeetings((prevousState) => myMeetings);
  }, []);

  if (!meetings) return <Text>Loading...</Text>;
  if (meetings.length == 0) return <Text>No Meetings</Text>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'column-reverse'}}>
        <Pressable
          style={styles.button}
          onPress={() => setModalVisible(true)}
  
        >
          <Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}>
          Create Meeting</Text>
        </Pressable>
      </View>
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
            <Text style={{marginBottom: 15,textAlign: "center"}}>
            Make Meeting</Text>
            
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     

      <View style={styles.MeetingsContainer}>
        <SectionList
          sections={createSectionData(meetings)}
          renderSectionHeader={({ section }) => (
            <Text style={styles.SectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, section }) => <MeetingListItem meeting={item} />}
        />
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
    textAlign: "center"
  },
});

export default MeetingScreen;
