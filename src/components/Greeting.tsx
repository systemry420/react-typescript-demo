import React from 'react'

type Props = {
    name: string,
    count: number,
    isLogged: boolean
}

const Greeting = (props: Props) => {
  return (
    <div>
        <h1>Hello {props.name}</h1>
    </div>
  )
}

export default Greeting