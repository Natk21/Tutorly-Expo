import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const MeetingListItem = ({ meeting }) => {
  const [x, setX] = React.useState();
  useEffect(() => {
    console.log("Card");
  }, []);

  return (
    <View style={styles.Container}>
      <Text>{`Subject: ${meeting.subject}`}</Text>
      <Text>{`Time: ${meeting.time}`}</Text>
      <Text>{`Subject: ${meeting.subject}`}</Text>
    </View>
  ); ///modify this line to include a view with a bunch of children stuff, so container views, and style them to represent your meeting card
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FF0000",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default MeetingListItem;
