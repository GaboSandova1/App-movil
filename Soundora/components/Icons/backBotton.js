import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function BackBotton(props) {
  return (
    <Svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.677 7.29H3.675l5.081-5.753L7.4 0 0 8.377l7.399 8.377 1.357-1.537-5.081-5.753h14.002V7.29z"
        fill="#fff"
      />
    </Svg>
  )
}

