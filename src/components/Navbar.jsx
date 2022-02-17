import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="#">MARISHOP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className='btn btn-outline-dark mx-2'>
                                <FontAwesomeIcon icon={solid('right-to-bracket')} className='me-2' />
                                Masuk
                            </a>
                            <a href="" className='btn btn-outline-dark mx-2'>
                                <FontAwesomeIcon icon={solid('user-plus')} className='me-2' />
                                Daftar
                            </a>
                            <a href="" className='btn btn-outline-dark mx-2'>
                                <FontAwesomeIcon icon={solid('cart-shopping')} className='me-2' />
                                Troli
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar