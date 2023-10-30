function About() {
    return (
        <>
            <section className="aboutimg">
                <div className="container-fluid " style={{ backgroundColor: 'rgba(0, 0, 0, 0.664)', width: '100%', height: '100%' }}>
                    <div className="container pt-5">
                        <div className="row mt-4">
                            <h1 className="abouttext1">About Us</h1>
                            <div className="underline mt-2"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="container mt-5">
                        <div className="row pt-4">
                            <div className="col-md-6">
                                <h1 className="abouttext2">Welcome to our Charity</h1>
                                <div className="underline"></div>
                                <p className="aboutpera1 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                    tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus
                                    velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis
                                    tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                </p>
                                <a href="/"> <button className="btn2 mt-4 mb-4">Read More</button> </a>

                            </div>
                            <div className="col-md-6">
                                <img src="https://preview.colorlib.com/theme/thecharity/images/welcome.jpg.webp"
                                    className="img-fluid " alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid mt-5 pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 ">
                                <p className="itelicpera">
                                    We love to help all the children that have problems in the world. After 15 years we have
                                    many goals achieved.
                                </p>
                                <div className="underline"></div>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                <p className="itelicpera">
                                    We love to help all the children that have problems in the world. After 15 years we have
                                    many goals achieved.
                                </p>
                                <div className="underline"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid banner1 pt-5 pb-5 mt-5">
                    <div className="container banner1 mt-5 pb-5">
                        <div className="row ">
                            <div className="col-md-10">
                                <h1 className=" banmertext mt-4">Help us so we can help others</h1>

                            </div>
                            <div className="col-md-2">
                                <a href="/"> <button className="btn2 mt-4"> Donate Now</button> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;
