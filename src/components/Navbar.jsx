import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div class="container">
                    <Link class="navbar-brand fw-bold fs-4" to="/">MARISHOP</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/login" className='btn btn-outline-dark mx-2'>
                                <FontAwesomeIcon icon={solid('right-to-bracket')} className='me-2' />
                                Masuk
                            </Link>
                            <Link to="/register" className='btn btn-outline-dark mx-2'>
                                <FontAwesomeIcon icon={solid('user-plus')} className='me-2' />
                                Daftar
                            </Link>
                            <Link to="/cart" className='btn btn-outline-dark mx-2'>
                                <FontAwesomeIcon icon={solid('cart-shopping')} className='me-2' />
                                Troli ({state.length})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar