import React, { useContext, useEffect } from "react";
import { MovieContext } from "../App";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import "./detailed-design.css";

const DetailedMovie = ({ setViewHome }) => {
  useEffect(() => {
    setViewHome(false);
    return () => {
      setViewHome(true);
    };
  }, [setViewHome]);

  const { contmovies, idmovie } = useContext(MovieContext);

  if (!contmovies) {
    return <h2>Loading...</h2>;
  }

  const filteredMovies = contmovies.find((movie) => movie.id === idmovie);

  if (!filteredMovies) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-details-design d-flex justify-content-center align-items-center" style={{ backgroundColor: '#1c1c1c', color: '#fff', padding: '20px' ,
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${filteredMovies.poster_path})`,
        backgroundSize:"100% 100%"
        
    }}>
      {/* <div className="blurred-background" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${filteredMovies.poster_path})`,
        backgroundSize:"100% 100%"}}>
        
      </div> */}
      {/* <h2 className="text-center pt-5 fw-bold">{filteredMovies.title}</h2> */}
      <Container className="movie-details-content p-5">
        <Card className="shadow-lg border-0 rounded-3">
          <Row className="g-0">
            <Col xs={12} md={6} lg={4}>
              <Image
                className="image-design rounded-start"
                src={`https://image.tmdb.org/t/p/w300/${filteredMovies.poster_path}`}
                fluid
              />
            </Col>
            <Col xs={12} md={6} lg={8}>
              <Card.Body className="p-4">
                <Card.Title className="fw-bold fs-3">{filteredMovies.title}</Card.Title>
                <Card.Text className="text-muted">{filteredMovies.overview}</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className=" text-dark">
                    <strong>Original Language:</strong> {filteredMovies.original_language}
                  </ListGroup.Item>
                  <ListGroup.Item className=" text-dark">
                    <strong>Release Date:</strong> {filteredMovies.release_date}
                  </ListGroup.Item>
                  <ListGroup.Item className=" text-dark">
                    <strong>Popularity:</strong> {filteredMovies.popularity}
                  </ListGroup.Item>
                  <ListGroup.Item className=" text-dark">
                    <strong>Rating:</strong> {filteredMovies.vote_average} / 10
                  </ListGroup.Item>
                </ListGroup>
                {/* <div className="mt-3">
                  <Button variant="primary" className="me-2">Watch Trailer</Button>
                  <Button variant="success">Add to Favorites</Button>
                </div> */}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default DetailedMovie;