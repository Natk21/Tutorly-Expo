import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TouchableOpacity, View, Image, TextInput } from "react-native";
import routes from "../navigation/routes";

const ProfileScreen = (props) => {
  const handleSettingsPress = () => {
    navigation.navigate(routes.SettingsScreen);
  };

  const handleReviewPress = () => {
    navigation.navigate(routes.ReviewsScreen)
  }

  const usernameInput = () => {
    const [text, setText] = useState('');
  };

  const [defaultRating, setdefaultRating] = useState(0)
  const[maxRating, setmaxRating] = useState([0,1,2,3,4,5])

  const starImageFilled = './asses_images/star_Filled.png'
  const starImageNotFilled = './asses_images/star_NotFilled.png'

  const CustomRatingBar = () => {
    return(
      <View>
        {
          maxRating.map((item, key) => {
            return(
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress= {() => setdefaultRating(item)}
              >
                <Image
                  style={styles.starImageStyle}
                  source={
                    item <= defaultRatingx
                      ? {uri: starImageFilled}
                      : {uri: starImageNotFilled}
                  }
                />
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return(
    <SafeAreaView>
      <View style={styles.SettingsContainer}>
        <TouchableOpacity style ={{
        padding: 5,
        height: 50,
        width: 30}} 
        onPress = {handleSettingsPress}>
          <Image source={require('./assets_images/settingsImage.png')}/>
        </TouchableOpacity>
      </View>
      
      <View style={{
        flex: 1,
        right: 10,
        top: 20
        }}>
        <Image 
          source={{
            uri:'./assets_images/BlankProfileImage.png'
          }}  
          style={{
            width: 400, 
            height: 400, 
            borderRadius: 400/2
          }} 
        />
      </View>
      
      <View style={styles.MemberSince_Username_Container}>
        <TextInput
          style={{height: 40, width: 40}}
          placeholder="Enter desired Username"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Text style
          style={{height:40, width:40,}}
        >
          Member Since:
        </Text> 
      </View>

      <View style={styles.UserInfoContainer}>
          <Text style={{fontSize: 20}}>Instructor/Student</Text>
          <Text style={{fontSize: 20}}>Subjects that they teach/want to learn</Text>
          <CustomRatingBar/>
          <Text>About Me: I like to eat pizza and read</Text>
      </View>
      
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <View>
        <Text style={{
          justifyContent: "center",
          alignItems: "center", 
          top: 20
        }}>
        Contact Me
        </Text>
      </View>

      <View style={styles.contactInformationContainer}>
        <TextInput
          style={{height: 40, width: 40}}
          placeholder="Enter phone number"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <TextInput
          style={{height: 40, width: 40}}
          placeholder="Enter email"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
      </View>

      <View style={styles.ReviewButtonContainer}>
        <TouchableOpacity
          onPress = {handleReviewPress}
        >
          Write a review
        </TouchableOpacity>
      </View>




      

      
    
    </SafeAreaView>
    //figure out how to calculate how long a user has been a member for
    //figure out how to make sure if a user is a teacher or an instructor, maybe make it part of the login process
    //make subjects part of the login process and decide how it could be a text input
    //make it so user can write stuff about themselves
  

  );

  
};

const styles = StyleSheet.create({
  SettingsContainer:{
     flex: 1,
     flexDirection: "row-reverse",
     justifyContent: "flex-end",
   },
  MemberSince_Username_Container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    top: 20,

  },
  UserInfoContainer:{
    flex: 3,
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: 10

  }, 
  starImageStyle:{
    width: 40,
    height: 40,
    resizeMode: "cover"

  },
  contactInformationContainer: {
    flexDirection: "column-reverse",
    padding: 10
  },
  ReviewButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10

  },
});

export default ProfileScreen;
