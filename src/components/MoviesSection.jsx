import { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

class MoviesSection extends Component {
  state = {
    movieArray: [],
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=21e645cf&s=${this.props.query}`);
      const data = await response.json();
      this.setState({ movieArray: data.Search });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  render() {
    console.log(this.state.movieArray);

    return (
      <div className="mb-4">
        <h4 className="text-white mb-3">{this.props.title}</h4>
        <Container>
          <Row xs={1} sm={2} lg={4} xl={6} className="mb-4">
            {this.state.movieArray.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="mb-2 text-center px-1">
                <Image src={movie.Poster} alt={movie.Title} className="img-fluid w-100 poster-img" />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MoviesSection;
