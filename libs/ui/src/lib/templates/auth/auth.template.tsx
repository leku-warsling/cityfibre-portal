import { Flex, FlexProps } from "@chakra-ui/react"
import { Title, TitleProps } from "../../data-display/title"
import { motion } from "framer-motion"
import { FC } from "react"

export type AuthTemplateProps = FlexProps & TitleProps

const FlexMotion = motion(Flex)

const AnimationConfig = {
  initial: {
    opacity: 0,
    x: 1100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 1100,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
}

export const AuthTemplate: FC<AuthTemplateProps> = ({
  title,
  strapline,
  children,
  ...props
}) => (
  <FlexMotion {...AnimationConfig} {...props}>
    <Title strapline={strapline}>{title}</Title>
    {children}
  </FlexMotion>
)

AuthTemplate.defaultProps = {
  flexDir: "column",
  justify: "center",
  align: "center",
  gap: 10,
}
