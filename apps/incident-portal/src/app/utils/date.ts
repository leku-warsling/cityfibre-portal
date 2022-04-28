import format from "date-fns/fp/format"
import { flow } from "fp-ts/lib/function"
import constructN from "ramda/es/constructN"

const toDate = constructN(1, Date)

export const formatDateString = (formatStr: string) => flow(
  toDate,
  format(formatStr)
)