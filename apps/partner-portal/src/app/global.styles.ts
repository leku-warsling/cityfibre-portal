import { css } from "@emotion/react"
import { sohneBuch, sohneHalbfett, sohneSchmalFett } from "../assets/fonts"

const styles = css`
  @font-face {
    font-family: Sohne;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${sohneBuch}) format("woff2");
    unicode-range: U+0020-007F;
  }

  @font-face {
    font-family: Sohne;
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: url(${sohneHalbfett}) format("woff2");
    unicode-range: U+0020-007F;
  }

  @font-face {
    font-family: Sohne;
    font-style: normal;
    font-display: swap;
    font-weight: 800;
    src: url(${sohneSchmalFett}) format("woff2");
    unicode-range: U+0020-007F;
  }

  *:not(input):focus {
    outline: none !important;
    box-shadow: none !important;
  }

  #registration .chakra-steps > li {
    & > div {
      div:first-of-type {
        &[data-highlighted] {
          background-color: black;
        }
        &[aria-current="step"] {
          background-color: #00fa69;
          svg {
            color: black;
          }
        }
        border-color: black;
      }

      div:first-of-type span {
        color: black;
        font-weight: 800;
      }

      div:last-of-type span {
        font-weight: 800;
        color: black !important;
        font-size: 24px;
        letter-spacing: 0.5px;
        padding-left: 8px;
      }

      &:last-of-type {
        border-color: black;
      }
    }

    &[aria-disabled="true"] > div {
      div:first-of-type {
        background: none;
        span {
          color: black;
        }
      }
    }
  }
`

export default styles
