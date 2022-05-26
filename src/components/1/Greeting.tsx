import React from 'react'

type Props = {
    name: string,
    count: number,
    isLogged: boolean
}

const Greeting = ({ name, count, isLogged }: Props) => {
  return (
    <div>
        <h1>Hello {name}</h1>
        <h1>Messages: {count}</h1>
        {isLogged && <h2>Welcome</h2>}
    </div>
  )
}

export default Greeting