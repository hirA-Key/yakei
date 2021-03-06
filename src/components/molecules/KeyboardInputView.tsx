import React, { FC, Dispatch, SetStateAction } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import KeyboardStickyView from "rn-keyboard-sticky-view";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isInputForm: boolean;
  addComment: () => void;
  onBlur: () => void;
};

const KeyboardInputView: FC<Props> = ({ ...props }) => {
  const {
    textInputRef,
    inputValue,
    setInputValue,
    isInputForm,
    addComment,
    onBlur,
  } = props;

  return (
    <KeyboardStickyView
      style={isInputForm ? styles.keyboardViewTrue : styles.keyboardViewFalse}
    >
      <TextInput
        multiline
        ref={textInputRef}
        blurOnSubmit={false}
        placeholder="コメントを入力..."
        style={isInputForm ? styles.input : styles.keyboardViewFalse}
        value={inputValue}
        onChangeText={(value) => setInputValue(value)}
        onBlur={() => onBlur()}
      />
      <Text style={styles.sendIcon} onPress={() => addComment()}>
        <FontAwesome name="send" size={20} />
      </Text>
    </KeyboardStickyView>
  );
};

const styles = StyleSheet.create({
  keyboardViewFalse: {
    display: "none",
  },
  keyboardViewTrue: {
    flexDirection: "row",
    width: deviceWidth,
    height: "auto",
    paddingTop: 7,
    paddingLeft: 7,
    backgroundColor: "#fff",
  },
  input: {
    width: deviceWidth / 1.15,
    minHeight: 30,
    maxHeight: 150,
    height: "auto",
    marginBottom: 7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 25,
    color: "#505050",
    borderColor: "#f0f0f0",
    backgroundColor: "#f0f0f0",
  },
  sendIcon: {
    marginLeft: "auto",
    paddingRight: 15,
    paddingBottom: 5,
    color: "#606060",
  },
});

export default KeyboardInputView;
