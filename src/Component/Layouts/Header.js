import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <section>
                <div className="container-fluid minhead1">
                    <div className="container minhead2">
                        <div className="row">
                            <div className="col-md-4 box p-3 text-white">
                                <span className="headtittle1">MAIL: <a href="/" className="anchortext1">contact@ourcharity.com</a>
                                </span>
                            </div>

                            <div className="col-md-4  p-3 text-white">
                                <span className="headtittle1">PHONE: <a href="/" className="anchortext1">+24 3772 120 091 / +56452
                                    4567</a></span>
                            </div>

                            <div className="col-md-4 box1">
                                <Link to="/"><button className="btn1"><b>Donate Now</b></button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <nav className="navbar navbar-expand-md navbar-dark ">
                    <div className="container">
                        <Link to="index.html" className="navbar-brand">
                            <img src="https://preview.colorlib.com/theme/thecharity/images/logo.png.webp" className="navlogo"
                                alt="" /></Link>

                        <button className="navbar-toggler" data-bs-target="#a" data-bs-toggle="collapse">
                            <span className="navbar-toggler-icon icon1"></span>
                        </button>

                        <div className="navbar-collapse collapse" id="a">
                            <ul className="navbar-nav ms-auto p-3 text-center">
                                <li>< Link to="home" className="nav-link menu1 ">Home</Link></li>
                                <li>< Link to="about" className="nav-link menu">About Us</Link></li>
                                <li>< Link to="causes" className="nav-link menu">Causes</Link></li>
                                <li>< Link to="gallery" className="nav-link menu">Gallery</Link></li>
                                <li>< Link to="news" className="nav-link menu">News</Link></li>
                                <li>< Link to="contact" className="nav-link me-4 menu">Contact</Link></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
export default Header;