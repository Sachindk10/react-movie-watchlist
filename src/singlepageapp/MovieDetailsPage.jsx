import React, { useContext } from 'react'
import { MovieContext } from '../App'
import { Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';

const MovieDetailsPage = () => {
  const {contmovies,idmovie} = useContext(MovieContext)
  if (!contmovies) {
  return <h2>Loading...</h2>;
}
  console.log(contmovies);
  console.log(idmovie);
  
  
  const [filteredMovies] = contmovies.filter((movie) => movie.id === idmovie);
console.log(filteredMovies);

  if (!filteredMovies) {
      return <h2>Movie not found</h2>;
    }
  
  return (
    <div>
      <h2 className='d-flex align-items-center justify-content-center mt-5' >{filteredMovies.title}</h2>
      <Container className="pt-5">
      <Row className="d-flex align-items-center justify-content-center">
        <Col xs={12} md={4} className='mb-5'>
          <Image src={`https://image.tmdb.org/t/p/w300/${filteredMovies?.poster_path}`} thumbnail  />
        </Col>
        <Col xs={12} md={6} className='mb-5'>
        <Card style={{ width: '48rem', height:'29rem' }}>
      <Card.Header>Movie Info</Card.Header>
      <Card.Body>
        {/* <Card.Title>{filteredMovies.title}</Card.Title> */}
        <Card.Text>Synopsis</Card.Text>
        <Card.Text>
          {filteredMovies.overview}
        </Card.Text>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Original Language : {filteredMovies.original_language}</ListGroup.Item>
        <ListGroup.Item>Release Date : {filteredMovies.release_date} </ListGroup.Item>
        <ListGroup.Item>Popularity : {filteredMovies.popularity}</ListGroup.Item>
      </ListGroup>
    </Card>
        </Col>
        </Row>
        </Container>

        

    </div>
  )
}

export default MovieDetailsPage