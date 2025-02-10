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
import "./movie-details-design.css";
const MovieDetailsPage = ({ setViewHome }) => {
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
  console.log(contmovies);
  console.log(idmovie);

  const [filteredMovies] = contmovies.filter((movie) => movie.id === idmovie);
  console.log([filteredMovies]);

  if (!filteredMovies) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-details-design">
      <h2 className="d-flex align-items-center justify-content-center pt-5 text-light fw-bold">
        {filteredMovies.title}
      </h2>
      <Container className="p-5">
        <Card>
          <Row className="p-5 shadow-lg border rounded-3">
            <Col xs={12} md={6} lg={3} className="">
              <Image
                className="image-design"
                src={`https://image.tmdb.org/t/p/w300/${filteredMovies?.poster_path}`}
                fluid
              />
            </Col>
            <Col xs={12} md={6} lg={3} className="pt-5">
              <Card style={{ width: "45rem", height: "25rem" }}>
                <Card.Header className="fw-bold">Movie Info</Card.Header>
                <Card.Body>
                  {/* <Card.Title>{filteredMovies.title}</Card.Title> */}
                  <Card.Text>Synopsis</Card.Text>
                  <Card.Text text-muted>{filteredMovies.overview}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Original Language : {filteredMovies.original_language}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Release Date : {filteredMovies.release_date}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Popularity : {filteredMovies.popularity}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default MovieDetailsPage;
