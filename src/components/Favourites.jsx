import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { playSong } from "../redux/reducers/playerSongReducer"
import { removeSong } from "../redux/reducers/likedSongsReducer"

const Favourites = () => {
  const likedSongs = useSelector(state => state.likedSongs.likedSongs)
  const dispatch = useDispatch()

  const handleRemoveSong = songId => {
    dispatch(removeSong(songId))
  }

  return (
    <Col xs={12} md={9} className="col-12 col-md-9 offset-md-2 mainPage text-white mt-3">
      <h2 className="mb-5">My Playlist</h2>
      <Container>
        <Row>
          {likedSongs.map(song => (
            <Col xs={10} key={song.id}>
              <div className=" m-2 hover border-light rounded d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div
                    style={{ width: "100px", height: "100px" }}
                    className="me-3"
                    onClick={() => dispatch(playSong(song))}
                  >
                    <img src={song.album.cover_medium} alt="cover" className="w-100" />
                  </div>
                  <div>
                    <Link className="mb-0 text-white fs-5" onClick={() => dispatch(playSong(song))}>
                      {song.title}
                    </Link>
                    <p className="mb-0 text-white">{song.artist.name}</p>
                  </div>
                </div>
                <div>
                  <Button
                    variant="transparent"
                    className="text-white"
                    onClick={() => handleRemoveSong(song.id)}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Col>
  )
}

export default Favourites
