import { useDispatch, useSelector } from "react-redux"
import ArtistCard from "./ArtistCard"
import AlbumCard from "./AlbumCard"
import { Button, Col, Container, Row } from "react-bootstrap"
import { addSong, removeSong } from "../redux/reducers/likedSongsReducer"
import { playSong } from "../redux/reducers/playerSongReducer"
import { Link } from "react-router-dom"

const ResultsPage = () => {
  const results = useSelector(state => state.results.results)
  const likedSongs = useSelector(state => state.likedSongs.likedSongs)
  const dispatch = useDispatch()

  return (
    <Container fluid>
      <Col xs={12} md={9} className="col-12 col-md-9 offset-md-2 text-white mt-3">
        <div className="my-5">
          <h2 className="p-5 mb-5">Artists</h2>
          <Row>
            {results.slice(0, 4).map((result, index) => (
              <Col className="mb-5" xs={12} md={6} lg={3} key={index}>
                <ArtistCard artist={result.artist} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="mb-5">
          <h2 className="p-5  mb-5">Albums</h2>
          <Row>
            {results.slice(0, 4).map((result, index) => (
              <Col className="mb-5" xs={12} md={6} lg={3} key={index}>
                <AlbumCard album={result.album} />
              </Col>
            ))}
          </Row>
        </div>
      </Col>
      <Col xs={12} md={9} className="col-12 col-md-9 offset-md-2 text-white mt-3">
        <Container fluid>
          <Row>
            {results.map(song => (
              <Col xs={12} key={song.id}>
                <div className="px-5 m-2 hover border-light rounded d-flex justify-content-between">
                  <div className="d-flex">
                    <div
                      style={{ width: "auto", height: "auto" }}
                      className="  me-3 hover"
                      onClick={() => dispatch(playSong(song))}
                    >
                      <img src={song.album.cover_small} alt="cover" className="w-100" />
                    </div>
                    <div>
                      <Link className="mb-0 fs-4" onClick={() => dispatch(playSong(song))}>
                        {song.title}
                      </Link>
                      <h6 className="mb-0">{song.artist.name}</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    {likedSongs.includes(song) ? (
                      <Button
                        variant="transparent"
                        className="text-white"
                        onClick={() => dispatch(removeSong(song.id))}
                      >
                        <i className="bi bi-heart-fill"></i>
                      </Button>
                    ) : (
                      <Button
                        variant="transparent"
                        className="text-white"
                        onClick={() => dispatch(addSong(song))}
                      >
                        <i className="bi bi-heart"></i>
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Col>
    </Container>
  )
}
export default ResultsPage
