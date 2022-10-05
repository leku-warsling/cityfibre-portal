import { useToken } from "@chakra-ui/system"
import { SVGAttributes } from "react"

export type AnimatedCirclesProps = SVGAttributes<SVGSVGElement> & {
  bgColor?: string
  color?: string
}

const AnimatedCircles = ({
  bgColor = "secondary.500",
  color = "primary.500",
  ...props
}: AnimatedCirclesProps) => {
  const bc = useToken("colors", bgColor)
  const c = useToken("colors", color)

  return (
    <svg {...props}>
      <defs>
        <circle id="circle-1" cx="135" cy="340" r="210">
          <animate
            attributeName="cx"
            dur="4s"
            values="135; 400; 135"
            keyTimes="0; 0.5; 1"
          />
          <animate
            attributeName="r"
            dur="4s"
            values="210; 245; 210"
            keyTimes="0; 0.5; 1"
          />
        </circle>
        <circle id="circle-2" cx="430" cy="295" r="145">
          <animate
            attributeName="cx"
            dur="4s"
            values="430; 75; 430"
            keyTimes="0; 0.5; 1"
          />
          <animate
            attributeName="r"
            dur="4s"
            values="145; 65; 145"
            keyTimes="0; 0.5; 1"
          />
        </circle>
        <clipPath id="clip-circle">
          <use href="#circle-2" />
        </clipPath>
      </defs>
      <rect width="100%" height="100%" fill={bc} />
      <g fill="none">
        <use href="#circle-1" fill={c} />
        <use href="#circle-2" fill={c} />
        <use href="#circle-1" fill={bc} clip-path="url(#clip-circle)" />
      </g>
    </svg>
  )
}

AnimatedCircles.defaultProps = {
  preserveAspectRatio: "xMidYMid slice",
  viewBox: "0 0 570 800",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
}

export default AnimatedCircles
