import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getAllStuffReviewsMadeByUser } from '../apis/users'


function StuffReviewsByUser() {
  
  const { userId } = useParams()
  
  const {
    data: stuffReviews,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['stuff_reviews_by_user', userId],
    queryFn: async () => {
      const reviews = await getAllStuffReviewsMadeByUser(Number(userId))
      return reviews
    },
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>No reviews!</p>
  }

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {stuffReviews?.map((review) => (
          <li 
            key={review.id} 
            className="border border-gray-300 p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <p className="mb-2"> <b>Rating: </b> {Array(review.rating).fill('⭐').join('')}</p>
            <p className="mb-2">
              <b>Stuff: </b> 
              <a href={`/stuff/${review.stuffId}`} className="text-blue-500 hover:underline">
                {review.stuffName}
              </a>
            </p>
            <p className="mb-2">
              <b>Listed By: </b> 
              <a href={`/users/${review.ownerId}`} className="text-blue-500 hover:underline">
                {review.ownerName}
              </a>
            </p>
            <p className="mb-2"><b>Description:</b> {review.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )   
}   

export default StuffReviewsByUser