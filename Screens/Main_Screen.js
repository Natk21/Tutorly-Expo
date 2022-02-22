import React, { useEffect } from "react";
import { SafeAreaView, SectionList, StyleSheet, Text } from "react-native";
import { getMyMeetingsFromServer } from "../api/meetings/meetings.api";
import MeetingListItem from "../Components/MeetingsListItem";
import { WHITE_COLOR } from "../Themes/themeColors";

const MainScreen = (props) => {
  const [DATA, setDATA] = React.useState(null);

  useEffect(() => {
    const myMeetings = getMyMeetingsFromServer();

    setDATA((prevousState) => myMeetings);
  }, []);

  console.log("Rerender");

  if (!DATA) return <Text>No DATA</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[{ title: "Math", data: DATA }]}
        renderSectionHeader={({ section }) => (
          <Text style={styles.SectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <MeetingListItem meeting={item} />}
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
});

export default MainScreen;
