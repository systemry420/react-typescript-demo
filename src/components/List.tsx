import React from 'react'

type Props = {
    list: {
        first: string, last: string
    }[]
}

const List = ( props: Props) => {
  return (
    <div>
        <ul>
            {props.list.map(item => (
                <li>{item.first} {item.last}</li>
            ))}
        </ul>
    </div>
  )
}

export default List