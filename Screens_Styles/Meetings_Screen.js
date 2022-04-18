import React, { useEffect } from "react";
import {
  Pressable,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  createSectionData,
  getMyMeetingsFromServer,
} from "../api/meetings/meetings.api";
import MeetingListItem from "../Components/MeetingsListItem";
import routes from "../navigation/routes";
import { BLUE_COLOR, WHITE_COLOR } from "../Themes/themeColors";

const MeetingScreen = (props) => {
  const { navigation } = props;
  const [meetings, setMeetings] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    const myMeetings = getMyMeetingsFromServer(); //this may take 3 sec to come back...

    setMeetings((prevousState) => myMeetings);
  }, []);

  if (!meetings) return <Text>Loading...</Text>;
  if (meetings.length == 0) return <Text>No Meetings</Text>;

  const onCreatePressed = () => {
    navigation.navigate(routes.CreateMeetingScreen);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "column-reverse" }}>
        <Pressable style={styles.button} onPress={onCreatePressed}>
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Create Meeting
          </Text>
        </Pressable>
      </View>
      {/* <CreateMeetingModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}

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
});

export default MeetingScreen;
