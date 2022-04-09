import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";

const ProfileScreen = (props) => {
  let isTeacher = false;
  const MemberSince = "January 15th 2017";
  const Subjects = ["Math ", "Science ", "English"];

  const TeacherorStudent = (isTeacher) => {
    if (isTeacher) {
      return <Text>Instructor</Text>;
    } else {
      return <Text>Student</Text>;
    }
  };
  const [text, onChangeText] = React.useState("");
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImageEmpty =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
            >
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageEmpty }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.UserProfileContainer}>
        <CustomRatingBar />

        <Image
          source={require("../assets_images/BlankProfileImage.png")}
          style={styles.ProfileImageStyle}
        />

        <TextInput
          style={styles.UsernameTextStyle}
          onChangeText={onChangeText}
          value={text}
          placeholder="Username"
          keyboardType="default"
        />
        <TextInput
          style={styles.PasswordTextStyle}
          onChangeText={onChangeText}
          value={text}
          placeholder="Password"
          keyboardType="default"
        />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 2, backgroundColor: "black" }} />
          <View>
            <Text style={{ width: 80, textAlign: "center" }}>Information</Text>
          </View>
          <View style={{ flex: 1, height: 2, backgroundColor: "black" }} />
        </View>
      </View>

      <View style={styles.UserInformationContainer}>
        <Text>Member Since: {MemberSince}</Text>
        <Text>Position: {TeacherorStudent(false)}</Text>
        <Text>Subjects: {Subjects} </Text>
      </View>
    </SafeAreaView>
    //figure out how to calculate how long a user has been a member for
    //figure out how to make sure if a user is a teacher or an instructor, maybe make it part of the login process
    //make subjects part of the login process and decide how it could be a text input
    //make it so user can write stuff about themselves
  );
};
const styles = StyleSheet.create({
  UserProfileContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
  },
  UserInformationContainer: {
    flex: 2.5,
    marginLeft: 5,
  },
  ProfileImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginLeft: 0,
    marginTop: 10,
  },
  CustomRatingBarStyle: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  starImageStyle: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  UsernameTextStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: 270,
    marginTop: -90,
    marginLeft: 100,
  },
  PasswordTextStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: 270,
    marginTop: -5,
    marginLeft: 100,
  },
});

export default ProfileScreen;
