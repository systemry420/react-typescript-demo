import React from 'react'

type User = {
    name: string
    email: string
}

const UserPage = () => {
    const [user, setUser] = React.useState<User | null>(null)
    const [user2, setUser2] = React.useState<User>({} as User)

    const login = () => {
        setUser({
            name: 'Bob', email: 'bob@gmail.com'
        })
    }

  return (
    <div>
        <h1>Hello {user?.name} </h1>
        <h1>Email: {user?.email} </h1>

        <h2> Hello {user2.name}  </h2>
        <h2> Email: {user2.email} </h2>
    </div>
  )
}

export default User