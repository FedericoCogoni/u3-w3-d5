import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {
  setFirstSection,
  setSecondSection,
  setThirdSection,
} from "../redux/reducers/sectionReducer"
import MainCard from "./MainCard"

const HomePage = () => {
  const dispatch = useDispatch()
  const firstSection = useSelector(state => state.section.firstSection)
  const secondSection = useSelector(state => state.section.secondSection)
  const thirdSection = useSelector(state => state.section.thirdSection)

  const handleSection = async artistName => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      )
      if (response.ok) {
        let { data } = await response.json()
        data.length = 4
        switch (artistName) {
          case "slayer":
            dispatch(setFirstSection(data))
            break
          case "noyz narcos":
            dispatch(setSecondSection(data))
            break
          case "ruggero dei timidi":
            dispatch(setThirdSection(data))
            break
          default:
            console.log("nothing to dispatch")
            break
        }
      } else {
        throw new Error("Error")
      }
    } catch (err) {
      console.log("Error", err)
    }
  }

  useEffect(() => {
    handleSection("slayer")
    handleSection("noyz narcos")
    handleSection("ruggero dei timidi")
  }, [])

  return (
    <>
      <Col md={8} className="offset-md-3 mainPage">
        <Row className="justify-content-center">
          <Col lg={10} className="mainLinks d-none d-md-flex">
            <NavLink to="#">TRENDING</NavLink>
            <NavLink to="#">PODCAST</NavLink>
            <NavLink to="#">MOODS AND GENRES</NavLink>
            <NavLink to="#">NEW RELEASES</NavLink>
            <NavLink to="#">DISCOVER</NavLink>
          </Col>
        </Row>
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <div id="metal">
                <h2>Metal</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="metalSide">
                  {firstSection.length > 0 &&
                    firstSection.map(song => (
                      <Col key={song.id} xs={12} md={6} lg={4} xl={3} className="mb-4">
                        <MainCard songInfo={song} />
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <div id="rap">
                <h2>Rap</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rapSide">
                  {secondSection.length > 0 &&
                    secondSection.map(song => (
                      <Col key={song.id} xs={12} md={6} lg={4} xl={3} className="mb-4">
                        <MainCard songInfo={song} />
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <div id="cult">
                <h2>Cult</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="cultSide">
                  {thirdSection.length > 0 &&
                    thirdSection.map(song => (
                      <Col key={song.id} xs={12} md={6} lg={4} xl={3} className="mb-4">
                        <MainCard songInfo={song} />
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  )
}
export default HomePage
