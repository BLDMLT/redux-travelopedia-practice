import React from 'react'
import { useGetRandomDestinationQuery } from '../api/randomDestinationApi'

function RandomDestination() {
  const { data, isLoading, isSuccess, isError, error } = useGetRandomDestinationQuery()

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    console.log(data)
    content = <div className='text-center border p-3'>
      <h4 className='text-success'>Random Travel Suggestion:</h4>
      {data.city}, {data.country}
    </div>
  }
  return <div className="pt-3">{content}</div>
}

export default RandomDestination