import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const MeetingListItem = (props) => {
  const { meeting } = props;

  return <Button> {meeting.instructorName} </Button>; ///modify this line to include a view with a bunch of children stuff, so container views, and style them to represent your meeting card
};

const styles = StyleSheet.create({
  ButtonArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Setting_Icon: {
    justifyContent: "flex-start",
  },
});

export default MeetingListItem;
