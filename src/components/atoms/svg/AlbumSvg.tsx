import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
};

const AlbumSvg: FC<Props> = ({ color = "#FC2E7E" }) => {
  return (
    <Svg width={20} height={15} viewBox="0 0 20 15" fill="none">
      <Path
        d="M18.125 0c.52 0 .963.182 1.328.547.365.364.547.807.547 1.328v11.25c0 .52-.182.963-.547 1.328a1.808 1.808 0 01-1.328.547H1.875c-.52 0-.964-.182-1.328-.547A1.808 1.808 0 010 13.125V1.875C0 1.355.182.911.547.547A1.808 1.808 0 011.875 0h16.25zm-.234 13.125c.156 0 .234-.078.234-.234V2.109c0-.156-.078-.234-.234-.234H2.109c-.156 0-.234.078-.234.234v10.782c0 .156.078.234.234.234h15.782zM3.867 3.906c.313-.312.69-.469 1.133-.469.443 0 .807.157 1.094.47.312.286.468.65.468 1.093 0 .443-.156.82-.468 1.133-.287.286-.651.43-1.094.43-.443 0-.82-.144-1.133-.43A1.617 1.617 0 013.437 5c0-.443.144-.807.43-1.094zM3.75 11.25V9.375l1.563-1.563c.208-.208.416-.208.625 0L7.5 9.376l4.688-4.688c.208-.208.416-.208.624 0l3.438 3.438v3.125H3.75z"
        fill={color}
      />
    </Svg>
  );
};

export default AlbumSvg;
