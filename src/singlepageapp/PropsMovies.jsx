import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieDetailsPage from "./MovieDetailsPage";

export const movieContext = useContext();

const PropsMovies = ({ url}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results);
        console.log("API Response:", response.data.results);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies.");
        setLoading(false);
      });
  }, [url]);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center g-4">
          {movies?.map((item, index) => {
            return (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w300/${item?.poster_path}`}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>
                      {item?.overview.length > 100
                        ? item.overview.substring(0, 100) + "..."
                        : item.overview}
                    </Card.Text>
                  </Card.Body>
                  <div className="d-flex justify-content-center">
                  <Button variant="danger" as={Link} to={"/details"}>
                View Details
              </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <movieContext.Provider value={{movies}}>
          {children}
      </movieContext.Provider>
    </div>
  );
};

export default PropsMovies;
