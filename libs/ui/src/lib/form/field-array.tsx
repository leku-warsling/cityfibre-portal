import {
  useFormContext,
  useFieldArray,
  FieldValues,
  UseFieldArrayReturn,
} from "react-hook-form"
import { partial } from "ramda"

export type FieldArrayRenderProps = UseFieldArrayReturn<
  FieldValues,
  string,
  "id"
> & {
  path: (...a: (string | number)[]) => string
}

export type FieldArrayProps = {
  render: (a: FieldArrayRenderProps) => JSX.Element
  defaultValues?: any
  name: string
  min?: number
  max?: number
}

const path = (...names: (string | number)[]) => names.join(".")

// TODO: sortable list react-beautiful-dnd + swap
// TODO: collapsable list items

export const FieldArray = ({
  defaultValues = {},
  render,
  name,
  max,
}: FieldArrayProps) => {
  const { control } = useFormContext()
  const fieldArrayProps = useFieldArray({ control, name })

  return render({
    path: partial(path, [name]),
    ...fieldArrayProps,
  })
}
