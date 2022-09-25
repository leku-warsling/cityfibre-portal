import { Box, Wrap, WrapItem } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { FC, ReactNode, useMemo, useState } from "react"
import prop from "ramda/es/prop"
import uniq from "ramda/es/uniq"
import includes from "ramda/es/includes"
import { get } from "lodash-es"

type Item = Record<string, any>

type FilterableListProps = {
  items: Item[]
  renderItem: (item: Item) => ReactNode
  filterBy: string[]
}

const MotionBox = motion(Box)
const animationConfig = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  whileHover: {
    scale: 1.075,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
}

const SearchableList: FC<FilterableListProps> = ({
  items,
  renderItem,
  filterBy,
}) => {
  const [keyword, setKeyword] = useState("")
  const options = useMemo(() => uniq(items.flatMap(prop<any>(filterBy))), [])

  const content = items
    .filter((i) => includes(keyword, get(i, filterBy)))
    .map((item, idx) => (
      <WrapItem key={`list-item-${idx}`}>
        <MotionBox {...animationConfig}>{renderItem(item)}</MotionBox>
      </WrapItem>
    ))

  return (
    <Box my={6}>
      <Select
        value={keyword}
        onChange={(e) => setKeyword(e.currentTarget.value)}
      >
        <option value="">Select option</option>
        {options.map((value) => (
          <option key={`option-${value}`} value={value}>
            {value}
          </option>
        ))}
      </Select>
      <Wrap spacing={4} my={8}>
        <AnimatePresence>{content}</AnimatePresence>
      </Wrap>
    </Box>
  )
}

export default SearchableList
