import React from 'react'

type StatusProps = {
    status?: 'loading' | 'sucess' | 'error',
    children: React.ReactNode
}

const Status = (props: StatusProps) => {
  return (
    <div>
        <p>Loading ...</p>
        <p>Success ...</p>
        {props.children}
    </div>
  )
}

export default Status