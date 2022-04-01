import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import routes from "../navigation/routes";
import {
  BLUE_COLOR,
  PURPLE_COLOR,
  RED_COLOR,
  YELLOW_COLOR,
} from "../Themes/themeColors";

const ProfileScreen = (props) => {
  const handleSettingsPress = () => {
    navigation.navigate(routes.SettingsScreen);
  };
  useEffect(() => {}, []);
  const [text, setText] = React.useState("");
  const handleReviewPress = () => {
    navigation.navigate(routes.ReviewsScreen);
  };

  const [defaultRating, setdefaultRating] = useState(0);
  const [maxRating, setmaxRating] = useState([0, 1, 2, 3, 4, 5]);

  const starImageFilled = "./asses_images/star_Filled.png";
  const starImageNotFilled = "./asses_images/star_NotFilled.png";

  const CustomRatingBar = () => {
    return (
      <View>
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
                    : { uri: starImageNotFilled }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const mapArray = ["1", "2", "3", "4"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.TopContainer}>
        <View style={{ backgroundColor: YELLOW_COLOR, flex: 0.25 }}></View>
        <View style={{ backgroundColor: PURPLE_COLOR, flex: 1 }}></View>
        {/* <Image
          source={{
            uri: "../asses_images/BlankProfileImage.png",
          }}
          style={{
            flex: 1,
            width: 50,
            height: 50,
            borderRadius: 400 / 2,
          }}
        /> */}
      </View>
      <View style={styles.ProfileListContainer}>
        {mapArray.map((item, key) => {
          <TextInput
            value={item}
            key={key}
            style={{ width: "75%" }}
          ></TextInput>;
        })}
      </View>
    </SafeAreaView>
    //figure out how to calculate how long a user has been a member for
    //figure out how to make sure if a user is a teacher or an instructor, maybe make it part of the login process
    //make subjects part of the login process and decide how it could be a text input
    //make it so user can write stuff about themselves
  );
};

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: BLUE_COLOR,
    alignContent: "center",
  },
  ProfileListContainer: {
    flex: 1,
    backgroundColor: RED_COLOR,
    justifyContent: "center",
  },
  SettingsContainer: {
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
  UserInfoContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: 10,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  contactInformationContainer: {
    flexDirection: "column-reverse",
    padding: 10,
  },
  ReviewButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
});

export default ProfileScreen;
