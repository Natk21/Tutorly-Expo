import React, { useEffect } from "react";
import { SafeAreaView, SectionList, StyleSheet, Text } from "react-native";
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
   <Text></Text>
  );
};



export default MainScreen;
