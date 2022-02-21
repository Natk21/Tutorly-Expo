import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { FlatList, StyleSheet,ScrollView, SectionList, View, Text} from "react-native";
import MeetingsListItem from "../Components/MeetingsListItem";
import routes from "../navigation/routes";

const Tab = createBottomTabNavigator();



let usersScienceMeetings = [];
let usersMathMeetings = [];
let usersComputerScienceMeetings = [];
let usersLanguageMeetings = [];

const SortMeetings = (MeetingSubject) => 
{
  switch(MeetingSubject)
  {
    case 'Math':
      usersMathMeetings.push()
      break;
    case 'Science':
      usersScienceMeetings.push()
      break;
    case 'ComputerScience':
      usersComputerScienceMeetings.push()
      break;
    case 'Language':
      usersLanguageMeetings.push()

  }
}


const MainScreen = (props) => 
{
  const myRenderItem = ({ item }) => <MeetingsListItem meeting={item} />;
  const handleSettingsPress = () => 
  {
    navigation.navigate(routes.SettingsScreen);
  };

  return 
  (
    <View style = {styles.container}>
    <SectionList>
      sections=
      {[
          {title: 'Math', data: [usersMathMeetings]},
          {title: 'Science', data: [usersScienceMeetings]},
          {title: 'ComputerScience', data: [usersComputerScienceMeetings]},
          {title: 'Language', data:[usersLanguageMeetings]}
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionTitle={({section}) => <Text style={styles.sectionTitle}>{section.title}</Text>}

    </SectionList>
    </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    paddingTop: 22, 
    alignItems: "center"
  },
  sectionTitle:
  {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 14,
    backgroundColor: 'rgba(247,247,247,1.0)',
  

  },
  item: 
  {
    paddingTop: 10,
    fontSize: 20,
  },
});

export default MainScreen;

