import React from 'react'

type Props = {
    list: {
        first: string, last: string
    }[]
}

const List = ( { list }: Props) => {
  return (
    <div>
        <ul>
            {list.map(item => (
                <li>{item.first} {item.last}</li>
            ))}
        </ul>
    </div>
  )
}

export default List