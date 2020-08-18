import React from 'react'
import { Pagination } from 'react-bootstrap'

type JobsPaginationProps = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  hasNextPage: boolean | undefined
}

export const JobsPagination = ({
  page,
  setPage,
  hasNextPage,
}: JobsPaginationProps) => {
  function adjustPage(amount: number) {
    setPage((prevPage) => prevPage + amount)
  }

  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {page !== 1 && (
        <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
      )}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && (
        <Pagination.Item onClick={() => adjustPage(-1)}>
          {page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && (
        <Pagination.Item onClick={() => adjustPage(1)}>
          {page + 1}
        </Pagination.Item>
      )}
      {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
    </Pagination>
  )
}
