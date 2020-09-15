import React, { FC } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type Props = {
  postUserName: string;
  postUserImage: string;
  message: string;
  date: string;
};

const CommentField: FC<Props> = ({ ...props }) => {
  const { postUserName, postUserImage, message, date } = props;

  return (
    <View style={styles.commentBox}>
      <Image
        style={styles.userIcon}
        source={{
          uri: postUserImage,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.commentData}>
        <Text style={styles.userName}>{postUserName}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentBox: {
    flexDirection: "row",
    width: wp("100%"),
    paddingVertical: hp("1.5%"),
    paddingLeft: wp("3%"),
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
  },
  commentData: {
    marginLeft: wp("3%"),
  },
  userIcon: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 180,
  },
  userName: {
    color: baseColor.text,
    fontWeight: "600",
    marginBottom: hp("1%"),
  },
  message: {
    color: "#e0e0e0",
    marginBottom: hp(".8%"),
    width: wp("80%"),
  },
  time: {
    fontSize: Size.Small,
    color: "#C0C0C0",
  },
});

export default CommentField;
