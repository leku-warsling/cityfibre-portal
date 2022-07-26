import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { z } from "zod"

export const pageSchema = z.object({
  title: z.optional(z.string()),
})

export type PageState = z.infer<typeof pageSchema>

export type PageContext = {
  setPage: (page: PageState) => void
}

export const usePage = (props: object) => {
  const { setPage } = useOutletContext<PageContext>()
  useEffect(() => setPage(props), [])
}
