import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Load() {
  return (
    <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
      <Path
        d="M7.75 19.882h-4a2 2 0 01-2-2v-14a2 2 0 012-2h4M14.75 15.882l5-5-5-5M19.75 10.882h-12"
        stroke="#53B175"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Load;
