import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../App'
import { Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';

const MovieDetailsPage = ({setViewHome}) => {
  useEffect(() => {
    setViewHome(false)
  
    return () => {
      setViewHome(true)
    }
  }, [setViewHome])
  
  const {contmovies,idmovie} = useContext(MovieContext)
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
    <div style={{background: "linear-gradient(120deg, rgb(76, 32, 236), rgb(171, 140, 245))",
      height:"100vh"
    }}>
      <h2 className='d-flex align-items-center justify-content-center pt-5 text-danger fw-bold' >{filteredMovies.title}</h2>
      <Container className="p-5">
      <Row className="">
        <Col xs={12} md={6} lg={3} className=''>
          <Image src={`https://image.tmdb.org/t/p/w300/${filteredMovies?.poster_path}`}  style={{height:"30rem"}} fluid thumbnail/>
        </Col>
        <Col xs={12} md={6} lg={3} className='pt-5'>
        <Card style={{ width: '48rem', height:'25rem' }}>
      <Card.Header className='fw-bold'>Movie Info</Card.Header>
      <Card.Body>
        {/* <Card.Title>{filteredMovies.title}</Card.Title> */}
        <Card.Text>Synopsis</Card.Text>
        <Card.Text text-muted>
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