import React from 'react'
import imagebg from '../assets/bg.jpg'
import { Card, Container } from 'react-bootstrap'
import Products from './Products'

const Home = () => {
    return (
        <div className="hero">
            <Card className="bg-dark text-white border-0">
                <Card.Img src={imagebg} alt="Card image" height='550px' />
                <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
                    <Container>
                        <Card.Title className='fs-1 fw-bolder display-3 mb-0'>New Season Arrival</Card.Title>
                        <Card.Text className='fs-3 lead'>
                            CHECK OUT ALL THE TREND
                        </Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            <Products />
        </div>
    )
}

export default Home