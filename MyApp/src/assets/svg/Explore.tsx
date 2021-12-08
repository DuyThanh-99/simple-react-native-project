import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export const Explore: React.FC<ISvg> = ({width, height, fill}) => {
  return (
    <Svg width={29} height={19} viewBox="0 0 29 19" fill="none">
      <Path
        d="M18.565 14.238a5.999 5.999 0 100-11.998 5.999 5.999 0 000 11.998zm6.32-1.094l3.58 3.58a1 1 0 11-1.415 1.413l-3.58-3.58a8 8 0 111.414-1.414h.001z"
        fill={fill || '#181725'}
      />
      <Rect
        x={0.42}
        y={0.237}
        width={8.855}
        height={2.399}
        rx={1.2}
        fill={fill || '#181725'}
      />
      <Rect
        x={0.42}
        y={7.675}
        width={6.464}
        height={2.399}
        rx={1.2}
        fill={fill || '#181725'}
      />
      <Rect
        x={0.42}
        y={15.114}
        width={8.855}
        height={2.399}
        rx={1.2}
        fill={fill || '#181725'}
      />
    </Svg>
  );
};
