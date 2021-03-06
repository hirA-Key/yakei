import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type Props = {
  navigation: any;
};

const Precautions: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.precautions}>
      <Text style={styles.PrecautionsTextColor}>
        登録することで、
        <Text
          style={styles.attention}
          onPress={() => navigation.navigate("termsOfService")}
        >
          利用規約
        </Text>
        及び
        <Text
          style={styles.attention}
          onPress={() => navigation.navigate("privacyPolicy")}
        >
          プライバシーポリシー
        </Text>
        に同意するものとします。
      </Text>
    </View>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  precautions: {
    marginTop: hp(".5%"),
  },
  PrecautionsTextColor: {
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Small,
    textAlign: "center",
    lineHeight: Size.lineHeight,
  },
  attention: {
    color: baseColor.accent,
    fontWeight: "bold",
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.NormalS,
  },
});

export default Precautions;
