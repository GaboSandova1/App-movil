import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Search(props) {
  return (
    <Svg
      width={24}
      height={26}
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.956 22.534c2.209 0 4.354-.837 6.094-2.377l5.47 6.19 1.76-1.99-5.47-6.192c1.36-1.97 2.1-4.398 2.101-6.898C19.911 5.055 15.445 0 9.956 0 4.466 0 0 5.055 0 11.267s4.466 11.267 9.956 11.267zm0-19.717c4.117 0 7.466 3.79 7.466 8.45 0 4.66-3.349 8.45-7.466 8.45-4.118 0-7.467-3.79-7.467-8.45 0-4.66 3.349-8.45 7.467-8.45z"
        fill="#fff"
      />
    </Svg>
  )
}

