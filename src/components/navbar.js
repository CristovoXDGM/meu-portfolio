import React, { Component } from 'react'



export default class NavBarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger text-white" href="#page-top">Cristovão Farias</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger text-white" href="#about">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger text-white" href="#services">Conhecimentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger text-white" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger text-white" href="#contact">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}