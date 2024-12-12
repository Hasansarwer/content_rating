import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [totalRating, setTotalRating] = useState(0)

  const handleLike = () => {
    setLikes(likes + 1)
    setTotalRating(totalRating + 1)
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1)
    setTotalRating(totalRating + 1)
  }


  return (
    <>
      <div className="content-rating">
        <p>TODO</p>
        <div className="rating-button">
          <button className="like-button"
          onClick={() => handleLike()}
          >Like ({likes})</button>
          <button className="dislike-button"
          onClick={() => handleDislike()}
          >Dislike ({dislikes})</button>
        </div>
        <p>Total rating: {totalRating}</p>
      </div>
     
      
      
    </>
  )
}

export default App
