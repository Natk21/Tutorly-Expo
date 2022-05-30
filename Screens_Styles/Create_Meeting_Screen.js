import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, } from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-material-dropdown";
import routes from "../navigation/routes";
 

const CreateMeetingScreen = ({ meeting = undefined, navigation }) => {
  const [meetings, setMeetings] = React.useState(null);
  const [meetingInput, setMeetingInput] = React.useState({});
  const [isTeacher, setTeacher] = useState(false);
  const [isStudent, setStudent] = useState(false);
  const [Grade, setGrade] = React.useState(null);
  //you must endup with a single object that combines all the vars
  useEffect(() => {}, []);

  
  //sets height for initial text input for the meeting description
  this.state = {
    value: '',
    height: 40
  }
  //extract values from this.state
  const {newValue, height} = this.state;

  //this function takes a new height and update the state to hold the new height
  updateSize = (height) => {
    this.setState({
      height
    });
  }
  
  const onStateChange = (field, value) => {
    setMeetingInput({ ...meetingInput, [field]: value });
  };

  const onDescriptionChange = (value) => {
    setMeetingInput({ ...meetingInput, description: value });
  };

  //this function will make sure that all info is placed and then if it is, info will be pushed to server and user will go back to meeting page
  const onSubmitPress = () => {
    
    navigation.navigate(routes.MainScreen);
  }
  
  

  //subjects that are displayed in dropdown
  let subjects = [{
    value: 'Math',
  },{
    value: 'Science',
  }, {
    value: 'Writing'
  },
  {
    value: 'Computer Science'
  },
  {
    value: 'Language',
  },
  {
    value: 'Other'
  }];

//insert scroll view later
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 20, marginLeft: 10}}>Are you a Teacher or a Student?</Text>
      {/*Checkbox for student and teacher*/}
      <View style={styles.TeacherorStudentContainer}>
        {/*Teacher Checkbox*/}
        <Checkbox.Android
          value={isTeacher}
          onValueChange={setTeacher}
          style={styles.TeacherCheckbox}
        />
        <Text style={styles.TeacherLabel}>Teacher</Text>
        {/*Student Checkbox*/}
        <Checkbox.Android
          value={isStudent}
          onValueChange={setStudent}
          style={styles.StudentCheckbox}
        />
        <Text style={styles.StudentLabel}>Student</Text>
      </View>
      {/*Asking user about subject of meeting*/}
      <Text style={{fontSize: 18, fontWeight: "bold"}}>What Subject is this meeting about?</Text>
      <View style={styles.SubjectContainer}>
        <Dropdown
          label='Subject'
          data={subjects}
        />
      </View>

      {/*Picking time for meeting*/}
      <Text style={{fontSize: 18, fontWeight: "bold"}}>What Time is the Meeting?</Text>
      <View style={styles.TimeContainer}>
      {/*Start Time*/}
      <ScrollPicker
        dataSource={['12:00am', '12:30am', '1:00am', '1:30am', '2:00am', '2:30am', '3:00am', '3:30am','4:00am', 
        "4:30am",'5:00am','5:30am','6:00am','6:30am','7:00am','7:30am','8:00am','8:30am','9:00am','9:30am','10:00am',
        '11:00am','12:00am','12:30pm','1:00pm','1:30pm','2:00pm','2:30pm','3:00pm','3:30pm','4:00pm','4:30pm','5:00pm','5:30pm',
        '6:00pm','6:30pm','7:00pm','7:30pm','8:00pm','8:30pm','9:00pm','9:30pm','10:00pm','10:30pm','11:00pm','11:30pm'
        ]}
        selectedIndex={1}
        renderItem={(_subjects, index) => {
        }}
        onValueChange={(_subjects, selectedIndex) => {
        }}
        wrapperHeight={180}
        wrapperWidth={150}
        wrapperColor='#FFFFFF'
        itemHeight={60}
        highlightColor='#d8d8d8'
        highlightBorderWidth={2}
      />
      {/*Splits the two times*/}
      <Text>-</Text>
      
      {/*End Time*/}
      <ScrollPicker
        dataSource={['12:00am', '12:30am', '1:00am', '1:30am', '2:00am', '2:30am', '3:00am', '3:30am','4:00am', 
        "4:30am",'5:00am','5:30am','6:00am','6:30am','7:00am','7:30am','8:00am','8:30am','9:00am','9:30am','10:00am',
        '11:00am','12:00am','12:30pm','1:00pm','1:30pm','2:00pm','2:30pm','3:00pm','3:30pm','4:00pm','4:30pm','5:00pm','5:30pm',
        '6:00pm','6:30pm','7:00pm','7:30pm','8:00pm','8:30pm','9:00pm','9:30pm','10:00pm','10:30pm','11:00pm','11:30pm'
        ]}
        selectedIndex={1}
        renderItem={(_subjects, index) => {
        }}
        onValueChange={(_subjects, selectedIndex) => {
        }}
        wrapperHeight={180}
        wrapperWidth={150}
        wrapperColor='#FFFFFF'
        itemHeight={60}
        highlightColor='#d8d8d8'
        highlightBorderWidth={2}
      />
      </View>
  
      {/*Large text input for meeting description */}
      <View style={styles.MeetingDescriptionContainer}>
          <TextInput
            onChangeText={(value) => this.setState({value})}
            multiline={true}
            value={value}
            //watch the content and call the function if the content excedes the row
            onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
            style={styles.MeetingDescriptionText}
            placeholder="Meeting Description"
          />
      </View>

      {/*Set date for meeting*/}
      <View style={styles.DateContainer}>

      </View>
      
      {/*Submit button*/}
      <View>
        <TouchableOpacity
          style={styles.Submitbutton}
          onPress={onSubmitPress}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  //style for the checkbox container that a user chooses wether he is a person that want to teach or wants a person to join to teach them
  TeacherorStudentContainer:{
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    flex: 1,
    

  },
  //style for the subject container where the user can choose from a list of subject
  SubjectContainer: {

  },
  //style for the time container that dictates length of meeting.
  TimeContainer: {

  },
  //style for container that is a breif summary of the specific sub-topic that you want to cover in this meeting, ex. selected coding as subject and javacript for description 
  MeetingDescriptionContainer:{

  },
  //style for the container that is the date of when meeting will occur, not include time but instead, month and day
  DateContainer: {

  },
  //style for the teacher and student checkbox
  StudentCheckbox, TeacherCheckbox: {
    alignSelf: "center",
  },
  //style for the label next to student and teacher checkbox
  StudentLabel, TeacherLabel: {
    margin: 8,
    fontSize: 15
  },
  //style for text input for choosing grade level
  Gradeinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  //style for the text input that descirbes the meeting in further detail
  MeetingDescriptionText: {

  },
  Submitbutton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },



});

export default CreateMeetingScreen;
