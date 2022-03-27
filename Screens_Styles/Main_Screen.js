import React, { useEffect } from "react";
import { SafeAreaView, SectionList, StyleSheet, Text, View } from "react-native";
import {
  createSectionData,
  getMyMeetingsFromServer,
} from "../api/meetings/meetings.api";
import MeetingListItem from "../Components/MeetingsListItem";
import { WHITE_COLOR } from "../Themes/themeColors";

const MainScreen = (props) => {
  const [meetings, setMeetings] = React.useState(null);

  useEffect(() => {
    const myMeetings = getMyMeetingsFromServer(); //this may take 3 sec to come back...

    setMeetings((prevousState) => myMeetings);
  }, []);

  if (!meetings) return <Text>Loading...</Text>;
  if (meetings.length == 0) return <Text>No Meetings</Text>;

  return (
    
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={createSectionData(meetings)}
        renderSectionHeader={({ section }) => (
          <Text style={styles.SectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, section }) => <MeetingListItem meeting={item} />}
      />
    </SafeAreaView>

    
    


    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "5%",
    marginHorizontal: 16,
    backgroundColor: WHITE_COLOR,
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
  DropDown: {
    flexDirection: "row-reverse",
  },
});

export default MainScreen;
