import React from "react";
import { MarkerProps, Marker } from "react-native-maps";

type MarkerDate = {
  markerDate: {
    photo_id: string;
    uid: string;
    create_time: string;
    url: string;
    favoriteNumber: number;
    latitude: number;
    longitude: number;
    comment_list: firebase.firestore.DocumentData[];
  };
  coordinate: {
    latitude: number;
    longitude: number;
  };
} & MarkerProps;

class OriginMarker extends React.Component<MarkerDate> {
  constructor(props: Readonly<MarkerDate>) {
    super(props);
  }

  render() {
    return (
      <Marker
        coordinate={{
          latitude: this.props.coordinate.latitude,
          longitude: this.props.coordinate.longitude,
        }}
      ></Marker>
    );
  }
}

export default OriginMarker;
