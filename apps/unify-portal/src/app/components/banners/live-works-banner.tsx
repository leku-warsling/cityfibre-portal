import liveWorksBgImg from "../../../assets/images/live-works-bg.webp"
import { Figure } from "@ui/lib/figure"
import { LogoIcon } from "@ui/lib/assets"

export const LiveWorksBanner = () => (
  <Figure
    bgImage={liveWorksBgImg}
    bgPos="center"
    bgSize="cover"
    color="white"
    h="100vh"
    w="48%"
  >
    <Figure.Header pt={20} pl={14}>
      <LogoIcon
        style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.22))" }}
        fontSize="5xl"
      />
    </Figure.Header>
  </Figure>
)
