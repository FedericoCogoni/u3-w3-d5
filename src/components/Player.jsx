import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import shuffle from "../assets/player/shuffle.png"
import prev from "../assets/player/prev.png"
import play from "../assets/player/play.png"
import next from "../assets/player/next.png"
import repeat from "../assets/player/repeat.png"
const BottomBar = () => {
  const song = useSelector(state => state.playSong.playerSong)
  return (
    <Col className="fixed-bottom playerBg pt-1 mt-4">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2 offset-md-3">
          <Row className="h-100 justify-content-center align-items-center">
            {song && (
              <Col className="position-fixed customStart">
                <div className="d-flex text-white">
                  <div className="p-1 me-3 albumImage">
                    <img src={song.album.cover_small} alt="cover" className="w-100" />
                  </div>
                  <div>
                    <small className="mb-0 hide">{song.title}</small>
                    <p className="mb-0 hide">{song.artist.name}</p>
                  </div>
                </div>
              </Col>
            )}
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <Link className="hide">
                  <img src={shuffle} alt="shuffle" />
                </Link>
                <Link>
                  <img src={prev} alt="prev" />
                </Link>
                <Link>
                  <img src={play} alt="play" />
                </Link>
                <Link>
                  <img src={next} alt="next" />
                </Link>
                <Link>
                  <img src={repeat} alt="repeat" />
                </Link>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}
export default BottomBar
