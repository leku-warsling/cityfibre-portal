import { Box, BoxProps, Heading, HStack } from "@chakra-ui/layout"
import { ButtonGroup, IconButton } from "@chakra-ui/button"
import pipe from "ramda/es/pipe"
import head from "ramda/es/head"
import { propNotEq } from "ramda-adjunct"
import { FC, ReactElement, ReactNode } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { BiHome } from "react-icons/bi"
import Breadcrumb from "../../navigation/breadcrumb"

export type PageHeaderProps = BoxProps & {
  onBack?: () => void
  breadcrumb?: { path: string; name: string }[]
  subtitle?: ReactNode
  actions?: ReactElement[]
  tags?: string[]
}

const shouldIncludeHome = pipe(head, propNotEq("path", "/"))

const PageHeader: FC<PageHeaderProps> = ({
  onBack,
  children,
  actions,
  fontSize,
  breadcrumb,
  ...props
}) => {
  return (
    <Box {...props}>
      {!!breadcrumb && (
        <Breadcrumb fontSize="14px" mb={1}>
          {shouldIncludeHome(breadcrumb) && (
            <Breadcrumb.Item color="gray.500">
              <Breadcrumb.Link href="/">
                <BiHome />
              </Breadcrumb.Link>
            </Breadcrumb.Item>
          )}
          {breadcrumb.map(({ path, name }, i) => (
            <Breadcrumb.Item
              key={i}
              color={i < breadcrumb.length - 1 ? "gray.500" : "inherit"}
            >
              <Breadcrumb.Link href={path}>{name}</Breadcrumb.Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
      <HStack mb={2} spacing={1} fontSize={fontSize}>
        {!!onBack && (
          <IconButton
            aria-label="Return to previous page"
            variant="ghost"
            icon={<FiArrowLeft />}
            onClick={onBack}
            rounded="full"
            _hover={{ bg: "gray.200" }}
            ml={-2.5}
          />
        )}
        <Heading
          fontSize={fontSize}
          fontWeight={800}
          letterSpacing="wide"
          textTransform="uppercase"
          flexGrow={1}
        >
          {children}
        </Heading>
        <ButtonGroup ml="auto" spacing={1}>
          {actions}
        </ButtonGroup>
      </HStack>
    </Box>
  )
}

PageHeader.defaultProps = {
  fontSize: ["lg", "xl", "2xl"],
  // borderBottom: "1px solid",
  // borderColor: "gray.300",
}

export default PageHeader
