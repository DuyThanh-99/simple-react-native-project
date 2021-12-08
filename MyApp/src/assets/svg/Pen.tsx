import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Pen() {
  return (
    <Svg width={14} height={14} viewBox="0 0 16 16" fill="none">
      <Path
        d="M10.553 4.54l-7.317 7.317-.479 1.632 1.6-.462 7.341-7.342-1.145-1.146zm1.249-1.249l1.144 1.145 1.068-1.067a.405.405 0 000-.573l-.574-.572a.405.405 0 00-.572 0L11.802 3.29zm2.784-2.212l.572.573a2.024 2.024 0 010 2.862l-9.952 9.952-3.416.988a.81.81 0 01-1.002-1.005l1.01-3.445 9.927-9.926a2.024 2.024 0 012.862 0l-.001.001z"
        fill="#53B175"
      />
    </Svg>
  );
}

export default Pen;
