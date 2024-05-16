import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  ListGroup,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { setResults } from "../redux/reducers/resultsReducer"
import { useDispatch } from "react-redux"
import logo from "../assets/logo/logo.png"

const SideBar = () => {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        dispatch(setResults(data.data))
        navigate("/results")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Col xs={2}>
      <Navbar expand="md" className="navBar1 justify-content-between " id="sidebar">
        <Container className="flex-column align-items-start">
          <NavbarBrand>
            <NavLink to="/">
              <img src={logo} alt="Spotify Logo" width="160" height="50" />
            </NavLink>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="me-auto">
              <ListGroup>
                <NavLink as={NavLink} to={"/"}>
                  <i className="bi bi-house-door-fill"></i>&nbsp; <span className="fs-5">Home</span>
                </NavLink>
                <NavLink as={NavLink} to={"/favourites"}>
                  <i className="bi bi-book-fill"></i>&nbsp;
                  <span className="fs-5"> My Playlist</span>
                </NavLink>
                <NavLink className="mt-3">
                  <Form className="d-flex">
                    <FormControl
                      placeholder="Search"
                      onChange={e => setSearchValue(e.target.value)}
                    />
                    <Button
                      variant="transparent"
                      className="btn btn-outline-secondary btn-sm"
                      type="submit"
                      onClick={() => handleSearch()}
                    >
                      Go
                    </Button>
                  </Form>
                </NavLink>
              </ListGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="navbarButton">
          <Button className="btn signupButton">Sign Up</Button>
          <Button className="btn loginButton">Login</Button>
          <div>
            <Link>Cookie Policy</Link> |<Link> Privacy</Link>
          </div>
        </div>
      </Navbar>
    </Col>
  )
}
export default SideBar
