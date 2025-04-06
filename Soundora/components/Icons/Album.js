import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

export default function Album(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="#fff"
      {...props}
    >
      <Circle cx={11.99} cy={11.99} r={2.01} />
      <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
      <Path d="M12 6a6 6 0 00-6 6h2a4 4 0 014-4z" />
    </Svg>
  )
}

