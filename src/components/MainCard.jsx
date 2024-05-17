import React from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addSong, removeSong } from "../redux/reducers/likedSongsReducer"
import { playSong } from "../redux/reducers/playerSongReducer"

const MainCard = ({ songInfo }) => {
  const likedSongs = useSelector(state => state.likedSongs.likedSongs)
  const dispatch = useDispatch()
  const isSongLiked = likedSongs.some(song => song.id === songInfo.id)
  const [isLiked, setIsLiked] = React.useState(isSongLiked)

  const handleLike = () => {
    if (isSongLiked) {
      dispatch(removeSong(songInfo.id))
    } else {
      dispatch(addSong(songInfo))
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className="col mb-4">
      <div
        className="card bg-transparent text-center"
        style={{ maxWidth: "256px", height: "380px" }}
      >
        <div onClick={() => dispatch(playSong(songInfo))}>
          <img className="img-fluid" src={songInfo.album.cover_medium} alt="Main Track" />
        </div>
        <div
          className="card-body d-flex justify-content-between"
          style={{ color: "white", border: "none" }}
        >
          <div>
            <h5 className="card-title">{songInfo.title}</h5>
            <h6 className="card-text">{songInfo.artist.name}</h6>
          </div>
          <div>
            <Button variant="transparent" className="text-white me-3" onClick={handleLike}>
              {isLiked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard
