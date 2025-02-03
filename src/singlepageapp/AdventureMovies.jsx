import axios from "axios";
import { useEffect, useState } from "react";
import { Adventure_movies } from "./url";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

const AdventureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(Adventure_movies)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching adventure movies:", error);
        setError("Failed to load movies.");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          {movies.map((item, index) => {
            return (
              <Col key={index} md={4} lg={3} className="mb-4">
                <Card style={{ width: "18rem", height: "500px"}} className="m-2">
                  <Image style={{ width: "18rem", height:"20rem" }}
                    src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.overview.length > 100
              ? item.overview.substring(0, 100) + "..."
              : item.overview}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AdventureMovies;
