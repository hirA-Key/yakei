import React, { FC } from "react";
import { View, Image } from "react-native";
import { styles } from "../../styles/user/setting";

type Props = {
  uri: string;
};

const Post: FC<Props> = ({ ...props }) => {
  const { uri } = props;
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={{ uri }}
      />
    </View>
  );
};

export default Post;
