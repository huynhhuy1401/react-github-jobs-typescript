import React, { useState } from 'react'
import useFetchJobs from './hooks/useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Job'
import { IJob, IParams } from './models'
import { JobsPagination } from './JobsPagination'
import { SearchForm } from './SearchForm'

function App() {
  const [params, setParams] = useState<Partial<IParams>>({})
  const [page, setPage] = useState<number>(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e: React.FormEvent<HTMLInputElement>) {
    const param = e.currentTarget.name
    const value =
      param === 'full_time' ? e.currentTarget.checked : e.currentTarget.value
    setPage(1)
    setParams((prevParams) => {
      return {
        ...prevParams,
        [param]: value,
      }
    })
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination hasNextPage={hasNextPage} page={page} setPage={setPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing</h1>}
      {jobs &&
        jobs.map((job: IJob) => {
          return <Job key={job.id} job={job} />
        })}
    </Container>
  )
}

export default App
