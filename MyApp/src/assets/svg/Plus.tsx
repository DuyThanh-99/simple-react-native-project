import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function PlusButton() {
  return (
    <Svg width={46} height={47} viewBox="0 0 46 47" fill="none">
      <Rect
        x={0.165}
        y={0.5}
        width={45.67}
        height={45.668}
        rx={17}
        fill="#00B36F"
      />
      <Path
        d="M31.5 23.334c0 .376-.144.74-.414 1.002-.263.27-.626.42-1.002.42h-5.665v5.663c0 .375-.15.739-.42 1.002-.263.263-.62.413-.996.413a1.423 1.423 0 01-1.422-1.415v-5.663h-5.665a1.422 1.422 0 01-1.002-2.424 1.423 1.423 0 011.002-.413h5.665v-5.663c0-.376.15-.739.42-1.002a1.403 1.403 0 011.998 0c.27.263.42.626.42 1.002v5.663h5.665c.376 0 .74.15 1.002.413.27.27.414.626.414 1.002z"
        fill="#fff"
      />
    </Svg>
  );
}

export default PlusButton;
