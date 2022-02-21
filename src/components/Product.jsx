import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton from 'react-loading-skeleton';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <Col md='6'>
                    <Skeleton height={400} />
                </Col>
                <Col md='6' style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </Col>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <Col md='6'>
                    <img src={product.image} alt={product.title} height='400px' width='400px' />
                </Col>
                <Col md='6'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <Button variant="outline-dark px-4 py-2">Add to Cart</Button>
                    <Link to='/cart' className="btn btn-dark ms-2 px-3 py-2">Go to Cart</Link>
                </Col>
            </>
        )
    }

    return (
        <div>
            <Container className='py-5'>
                <Row className='py-4'>
                    {loading ? <Loading /> : <ShowProduct />}
                </Row>
            </Container>
        </div>
    )
}

export default Product