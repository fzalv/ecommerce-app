import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <Col md='3'>
                    <Skeleton height={350} />
                </Col>
                <Col md='3'>
                    <Skeleton height={350} />
                </Col>
                <Col md='3'>
                    <Skeleton height={350} />
                </Col>
                <Col md='3'>
                    <Skeleton height={350} />
                </Col>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-4">
                    <Button variant='outline-dark' onClick={() => setFilter(data)}>All</Button>
                    <Button variant='outline-dark' className='ms-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
                    <Button variant='outline-dark' className='ms-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</Button>
                    <Button variant='outline-dark' className='ms-2' onClick={() => filterProduct("jewelery")}>Jewelery</Button>
                    <Button variant='outline-dark' className='ms-2' onClick={() => filterProduct("electronics")}>Electronic</Button>
                </div >
                {filter.map((product) => {
                    return (
                        <>
                            <Col md='3' className='mb-4'>
                                <Card className='text-center p-4 h-100'>
                                    <Card.Img variant="top" height='250px' key={product.id} src={product.image} alt={product.title} />
                                    <Card.Body>
                                        <Card.Title style={{ marginBottom: '0' }}>{product.title.substring(0, 12)}</Card.Title>
                                        <Card.Text className='lead fw-bold'>
                                            ${product.price}
                                        </Card.Text>
                                        <a href='#' className='btn btn-outline-dark'>Buy Now</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )
                })
                }
            </>
        )
    }

    return (
        <div>
            <Container className='mb-5 py-5'>
                <Row>
                    <Col lg='12'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </Row>
            </Container>
        </div>
    )
}

export default Products