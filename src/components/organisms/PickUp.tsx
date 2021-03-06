import React, { FC } from "react";
import { Platform, PlatformIOSStatic, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import { ActivityIndicator, ImageSourcePropType } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Timestamp } from "@google-cloud/firestore";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image } from "react-native-elements";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";

type PickUpScreenNavigationProp = StackNavigationProp<
  PickUpScreenStackParamList,
  "detail"
>;

type PickUpDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  img_index: string;
};

type PickUpItemList = {
  title: string;
  time: string;
  url: ImageSourcePropType;
  pickUpDataList: PickUpDataList[];
};

type Props = {
  navigation: PickUpScreenNavigationProp;
  pickUpItemList: PickUpItemList[];
  bottomHeight: number;
};

const PickUp: FC<Props> = ({ navigation, pickUpItemList, bottomHeight }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.allWrap, { paddingBottom: bottomHeight }]}>
        {pickUpItemList.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("detail", {
                photoDataList: item.pickUpDataList,
              })
            }
          >
            <Image
              style={styles.image}
              source={item.url}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.itemInfoWrap}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemTime}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: wp("100%"),
  },
  image: {
    width: wp("100%"),
    height: platformIOS.isPad ? wp("65") : wp("70%"),
  },
  itemInfoWrap: {
    height: platformIOS.isPad ? wp("18") : wp("20%"),
    width: wp("100%"),
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    backgroundColor: utilityColor.itemFilter,
    padding: wp("4%"),
  },
  itemTitle: {
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Normal : Size.NormalL,
    fontWeight: "500",
    paddingBottom: platformIOS.isPad ? wp("1") : wp("2%"),
  },
  itemTime: {
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Small : Size.Normal,
    fontWeight: "400",
  },
});

export default PickUp;
