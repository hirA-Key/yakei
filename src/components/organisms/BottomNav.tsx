import React, { FC } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { baseColor } from "../../styles/thema/colors";
import CameraAlbumWrap from "../../containers/molecules/CameraAlbumWrap";
import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import BottomNavTouchableOpacity from "../../containers/molecules/BottomNavTouchableOpacity";

type Props = {
  state: BottomTabBarProps["state"];
  descriptors: BottomTabBarProps["descriptors"];
  navigation: BottomTabBarProps["navigation"];
  isDisplayed: boolean;
  isAppearedBtns: boolean;
  opacityAnim: Object;
  onPressOut: () => void;
};

const BottomNav: FC<Props> = ({ ...props }) => {
  const {
    state,
    descriptors,
    navigation,
    isDisplayed,
    isAppearedBtns,
    opacityAnim,
    onPressOut,
  } = props;
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
    TouchableOpacity
  );

  return (
    <View style={[styles.container, isDisplayed ? {} : { display: "none" }]}>
      <AnimatedTouchableOpacity
        activeOpacity={1.0}
        onPressOut={onPressOut}
        style={[
          styles.whiteWrap,
          opacityAnim,
          isAppearedBtns ? {} : { display: "none" },
        ]}
      />
      <View style={styles.footerBackgroundWrap}>
        <FooterBackgroundSvg
          style={styles.footerBackground}
          backColor={baseColor.darkNavy}
        />
      </View>
      <View style={styles.cameraAndAlbumWrap}>
        <CameraAlbumWrap />
      </View>
      <View style={styles.footerItemsWrap}>
        {state.routes.map((route, index) => {
          return (
            <BottomNavTouchableOpacity
              key={index}
              state={state}
              route={route}
              descriptors={descriptors}
              navigation={navigation}
              index={index}
            />
          );
        })}
      </View>
    </View>
  );
};

const displayWidth = Dimensions.get("window").width;
const displayHeight = Dimensions.get("window").height;
const itemsFloatingRatio = 0.03623;
const viewboxRatio = 4.4588; // viewbox.width / viewbox.height

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 0,
  },
  whiteWrap: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "100%",
    height: displayHeight,
  },
  footerBackgroundWrap: {
    position: "absolute",
    bottom: -2.25,
    left: -2.75,
    width: displayWidth + 10,
    aspectRatio: viewboxRatio, // これがないと画面サイズぴったりのボトムナビにならない
  },
  footerBackground: {
    position: "absolute",
    shadowColor: "#aaaaaa",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.5,
  },
  cameraAndAlbumWrap: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    bottom: displayWidth * itemsFloatingRatio,
    width: displayWidth,
  },
  footerItemsWrap: {
    zIndex: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: displayWidth * itemsFloatingRatio,
    width: displayWidth,
  },
});

export default BottomNav;
