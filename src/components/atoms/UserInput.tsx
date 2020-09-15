import React, { FC, Fragment } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { Text, TextInput, StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  maxLength: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const UserInput: FC<Props> = ({ ...props }) => {
  const { label, placeholder, value, setValue, maxLength } = props;
  return (
    <Fragment>
      {/* インプットの説明 */}
      <Text style={styles.labelItem}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        returnKeyType="done"
        multiline={true}
        blurOnSubmit={true}
        editable={true}
        maxLength={maxLength}
        placeholderTextColor={utilityColor.placeholderText}
        onChangeText={(name) => setValue(name)}
        style={styles.editInput}
      />
    </Fragment>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  labelItem: {
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    fontWeight: "600",
    marginBottom: platformIOS.isPad ? wp("1%") : wp("1.5%"),
    marginTop: platformIOS.isPad ? wp("1.5%") : 0,
    paddingLeft: wp("3%"),
    borderBottomWidth: 1,
    borderColor: utilityColor.border,
  },
  editInput: {
    color: utilityColor.editBox,
    fontSize: platformIOS.isPad ? Size.Normal : Size.Large,
    fontWeight: "600",
    lineHeight: Size.lineHeight,
    paddingBottom: wp("3%"),
    paddingLeft: wp("3%"),
    paddingRight: wp("5%"),
    borderBottomWidth: 1,
    borderColor: utilityColor.border,
  },
});

export default UserInput;
