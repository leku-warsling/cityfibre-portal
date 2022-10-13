import {
  Box,
  Wrap,
  WrapItem,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"
import { matchSorter } from "match-sorter"
import debounce from "lodash-es/debounce"
import memoize from "fast-memoize"
import { m, AnimatePresence } from "framer-motion"
import { FC, ReactNode, useMemo, useState } from "react"
import { SearchInput } from "./SearchInput"

type Item = Record<string, any>

type SearchableListProps = {
  items: Item[]
  renderItem: (item: Item) => ReactNode
  filterBy: string
}

const MotionBox = m(Box)
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

const match = memoize(matchSorter)

const SearchableList: FC<SearchableListProps> = ({
  items,
  renderItem,
  filterBy,
}) => {
  const [searchText, setSearchText] = useState("")
  const onSearch = useMemo(() => debounce(setSearchText, 300), [])
  const filterOpts = {
    keys: [filterBy],
  }

  const content = match(items, searchText, filterOpts).map((item, idx) => (
    <WrapItem key={`list-item-${idx}`}>
      <MotionBox {...animationConfig}>{renderItem(item)}</MotionBox>
    </WrapItem>
  ))

  return (
    <Box my={6}>
      <SearchInput onSearch={onSearch} />
      {!content.length && (
        <Alert status="warning" my={6} maxW="980px">
          <AlertIcon />
          <AlertTitle mr={2}>No results found for: {searchText}</AlertTitle>
        </Alert>
      )}
      <Wrap spacing={4} my={8}>
        <AnimatePresence>{content}</AnimatePresence>
      </Wrap>
    </Box>
  )
}

export default SearchableList
