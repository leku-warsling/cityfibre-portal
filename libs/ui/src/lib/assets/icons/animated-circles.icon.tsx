import { css, Global } from "@emotion/react"
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
  const styles = css`
    #circle-1 {
      animation-name: c1Anim;
      animation-duration: 8s;
      animation-timing-function: ease-in-out;
    }

    #circle-2 {
      animation-timing-function: ease-in-out;
      animation-name: c2Anim;
      animation-duration: 8s;
    }

    @keyframes c1Anim {
      0% {
        cx: 135;
        r: 210;
      }
      50% {
        cx: 400;
        r: 245;
      }
      100% {
        cx: 135;
        r: 210;
      }
    }

    @keyframes c2Anim {
      from {
        cx: 430;
        r: 145;
      }
      50% {
        cx: 75;
        r: 65;
      }
      to {
        cx: 430;
        r: 145;
      }
    }
  `
  return (
    <svg {...props}>
      <Global styles={styles} />
      <defs>
        <circle id="circle-1" cx="135" cy="340" r="210" />
        <circle id="circle-2" cx="430" cy="295" r="145" />
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
