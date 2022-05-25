import React from 'react'

type StatusProps = {
    status?: 'loading' | 'sucess' | 'error',
    children: React.ReactNode,
    handleClick1?: () => void,
    handleClick2?: (e: React.MouseEvent) => void,
    handleClick3?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handleClick4: (id: number) => void,
    input: {
        value: string,
        handleChange: (e: React.ChangeEvent) => void
    },
    style?: React.CSSProperties
}

const Status = (props: StatusProps) => {
  return (
    <div style={props.style}>
        <p>Loading ...</p>
        <p>Success ...</p>
        {props.children}
        <button onClick={props.handleClick1}>Click me</button>
        <button onClick={props.handleClick2}>Click me</button>
        <button onClick={props.handleClick3}>Click me</button>
        <button onClick={() => props.handleClick4(3)}>Click me</button>
        <input type='text' value={props.input.value} onChange={props.input.handleChange} />
    </div>
  )
}

export default Status