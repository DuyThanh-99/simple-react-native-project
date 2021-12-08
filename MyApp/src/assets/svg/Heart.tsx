import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Heart: React.FC<ISvg> = ({width, height, fill}) => {
  return (
    <Svg width={24} height={20} viewBox="0 0 24 20" fill="none">
      <Path
        d="M3.98 9.01l7.823 7.824 7.824-7.824a3.688 3.688 0 10-5.216-5.217l-2.608 2.608-2.607-2.607A3.688 3.688 0 003.979 9.01zm6.954-6.956l.87.869.868-.87a6.148 6.148 0 118.694 8.694l-8.692 8.693a1.229 1.229 0 01-1.74 0l-8.693-8.692a6.148 6.148 0 118.692-8.693l.001-.001z"
        fill={fill || '#181725'}
      />
    </Svg>
  );
};
