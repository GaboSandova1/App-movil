import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Option(props) {
  return (
    <Svg
      width={8}
      height={31}
      viewBox="0 0 8 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.16 11.595c-2.112 0-3.84 1.662-3.84 3.694s1.728 3.695 3.84 3.695S8 17.32 8 15.289s-1.728-3.694-3.84-3.694zM4.16.51C2.048.51.32 2.173.32 4.205S2.048 7.9 4.16 7.9 8 6.237 8 4.205 6.272.511 4.16.511zm0 22.167c-2.112 0-3.84 1.663-3.84 3.695s1.728 3.694 3.84 3.694S8 28.405 8 26.373s-1.728-3.695-3.84-3.695z"
        fill="#fff"
      />
    </Svg>
  )
}


