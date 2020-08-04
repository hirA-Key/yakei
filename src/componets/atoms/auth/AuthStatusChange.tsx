import React, { FC } from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../../../styles/auth";

type Props = {
  text: string;
  navigation: any;
};

const AuthStatusChange: FC<Props> = ({ ...props }) => {
  const { text, navigation } = props;
  return (
    <SafeAreaView style={styles.authChangeWrap}>
      <Text style={styles.authChangeText} onPress={navigation}>
        {text}
      </Text>
    </SafeAreaView>
  );
};

export default AuthStatusChange;
