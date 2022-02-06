import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MeetingsListItem from "../Components/MeetingsListItem";
import routes from "../navigation/routes";

const Tab = createBottomTabNavigator();

const FakeMeetingData = [
  {
    instructorName: "Dr. John Doe",
    meetingName: "Meeting 1",
    date: "2020-06-01",
  },
  {
    instructorName: "Pew Pew Instructor",
    meetingName: "Meeting 2",
    date: "2020-06-01",
  },
];

const MainScreen = (props) => {
  const myRenderItem = ({ item }) => <MeetingsListItem meeting={item} />;
  const handleSettingsPress = () => {
    navigation.navigate(routes.SettingsScreen);
  };

  return (
    <FlatList
      style={{ flex: 1 }} //red color
      data={FakeMeetingData}
      renderItem={myRenderItem}
      keyExtractor={(item) => item.date}
    />
  );
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

export default MainScreen;

// {
//   /* <>
// {fakeData.map((item) => (
//   <Button key={item.id}>{"My Meeting " + item.name}</Button>
// ))}
// {fakeData.map((item) => (
//   <Text key={item.id}>{"My Meeting " + item.name}</Text>
// ))}
// </> */
// }
