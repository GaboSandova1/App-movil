import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Perfil(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 14.514c3.53 0 6.4-3.255 6.4-7.257S15.53 0 12 0C8.47 0 5.6 3.255 5.6 7.257s2.87 7.257 6.4 7.257zm0-10.886c1.765 0 3.2 1.628 3.2 3.629 0 2.001-1.435 3.628-3.2 3.628-1.765 0-3.2-1.627-3.2-3.628 0-2.001 1.435-3.629 3.2-3.629zm2.4 12.7H9.6c-5.294 0-9.6 4.882-9.6 10.885v1.815h3.2v-1.815c0-4.002 2.87-7.257 6.4-7.257h4.8c3.53 0 6.4 3.255 6.4 7.257v1.815H24v-1.815c0-6.003-4.306-10.885-9.6-10.885z"
        fill="#fff"
      />
    </Svg>
  )
}

