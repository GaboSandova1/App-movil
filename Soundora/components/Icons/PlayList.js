import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function PlayList(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 34 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.16 8.294H0v4.146h20.16V8.294zm0-8.294H0v4.147h20.16V0zm6.72 16.587V8.294h-3.36v8.293H16.8v4.147h6.72v8.294h3.36v-8.294h6.72v-4.147h-6.72zM0 20.734h13.44v-4.147H0v4.147z"
        fill="#fff"
      />
    </Svg>
  )
}

