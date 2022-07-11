import { ComponentStyleConfig } from "@chakra-ui/theme"

export const Table: ComponentStyleConfig = {
  sizes: {
    md: {
      table: {
        fontSize: "14px",
      },
      th: {
        pt: 4,
        pb: 3,
      },
      td: {
        pt: 3,
        pb: 3,
      },
    },
  },
  defaultProps: {
    size: "md",
  },
}
