import { Page, Table } from "@ui"
import useMigrationErrors from "../../hooks/useMigrationErrors"
import { tableActions, columns, renderJSONBody, colgroups } from "./util"
import mergeLeft from "ramda/es/mergeLeft"
import prop from "ramda/es/prop"
import { AxiosResponse } from "axios"
import { MigrationErrorResponse } from "../../entities/MigrationErrors"
import { useMemo, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { migration } from "../../api"
import { useToast } from "@chakra-ui/react"
import { inc, lensProp, over } from "ramda"

const initialState = {
  _page: 0,
  _limit: 10,
  _sort: "topic_name",
  _order: "asc",
}

const dataSpec = ({ data }: AxiosResponse<MigrationErrorResponse, any>) => ({
  count: data.total,
  rows: data.data,
})

const calcPageCount = (count: number = 0, limit: number = 10) => {
  return count ? Math.ceil(count / limit) : undefined
}

const MigrationErrorsPage = () => {
  const cache = useQueryClient()
  const toast = useToast()
  const [params, setParams] = useState(initialState)

  const removeMigration = useMutation(migration.remove, {
    onError: (err, _, context) => {
      toast({
        title: "Failed to deleted record",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    },
    onSuccess: () => {
      toast({
        title: "Successfully deleted record",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      cache.invalidateQueries("migrations")
    },
  })

  const updateMigration = useMutation(migration.update, {
    onError: (err, _, context) => {
      toast({
        title: "Failed to update record",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    },
    onSuccess: () => {
      toast({
        title: "Successfully updated record",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      cache.invalidateQueries("migrations")
    },
  })

  const query = useMigrationErrors(
    over(lensProp("_page"), inc, params),
    dataSpec
  )

  const isFetching =
    query.isFetching ||
    [removeMigration, updateMigration].some(prop("isLoading"))

  const pageCount = useMemo(() => {
    return query.isSuccess
      ? calcPageCount(query.data?.count, params._limit)
      : undefined
  }, [query, params._limit])

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={[6, 6, 8]}>Migration Errors</Page.Header>
      <Table
        data={query.data?.rows ?? []}
        columns={columns}
        isLoading={query.isLoading}
        isFetching={isFetching}
        renderExpansion={renderJSONBody}
        actions={tableActions({
          remove: removeMigration.mutate,
          update: updateMigration.mutate,
        })}
        initialState={{
          pageIndex: params._page,
          pageSize: params._limit,
          sortBy: [
            {
              id: "topic_name",
              desc: false,
            },
          ],
        }}
        manualPagination={true}
        onPaginate={({ pageIndex, pageSize }) =>
          setParams(
            mergeLeft({
              _page: pageIndex,
              _limit: pageSize,
            })
          )
        }
        onSort={({ id, desc }) =>
          setParams(
            mergeLeft({
              _sort: id ?? "topic_name",
              _order: desc ? "desc" : "asc",
            })
          )
        }
        pageCount={pageCount}
        colgroup={colgroups}
        bgColor="white"
        rounded={5}
        boxShadow="base"
        maxH="80vh"
        overflowY="auto"
      />
    </Page>
  )
}

export default MigrationErrorsPage
