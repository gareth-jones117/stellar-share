import { useParams } from 'react-router-dom'
import { useAllUsers, useUserById } from '../hooks/useUsers'

export function SingleUser() {
  const { id } = useParams()
  const { data: user, isPending, isError } = useUserById(id)

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>Error loading user</div>

  return (
    <div>
      <h1 className="text-xl font-bold text-center my-4">User's Details</h1>
      <ul className="flex justify-evenly items-center">
        <li className="items-center">
          <p>
            Name: <span className="font-bold">{user?.name}</span>
          </p>
          <p>
            Email: <span className="font-bold">{user?.email}</span>
          </p>
        </li>
        <li className="items-center">
          <img
            src={user?.picture}
            alt=""
            className="rounded-full w-24 h-24 aspect-square object-cover"
          />
        </li>
      </ul>
    </div>
  )
}