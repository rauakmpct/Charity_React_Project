function Contact() {
    return (
        <>
            <section className="aboutimg">
                <div className="container-fluid  " style={{ backgroundColor: 'rgba(0, 0, 0, 0.684)', width: '100%', height: '100%' }}>
                    <div className="container pt-5">
                        <div className="row mt-4">
                            <h1 className="abouttext1">Contact</h1>
                            <div className="underline mt-2 ms-3"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5  ">
                    <div className="row">
                        <div className="col-md-5 mt-5 ">
                            <h2 style={{ fontSize: '24px', fontWeight: '500' }}>Get In touch with us</h2>
                            <p style={{
                                marginTop: '20px', fontSize: '15px', color: '#929191', textAlign: 'justify',
                                lineHeight: '25px'
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
                                vestib ulum mauris. Lorem ipsum dolor sit amet, conse ctetur. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Integer accu
                                msan sodales odio, id tempus velit ullamc.</p>
                            <a className="icon" href="/"><i className="fa fa-instagram"></i></a>
                            <a className="icon" href="/"><i style={{ paddingLeft: '20px', marginTop: '20px' }} className="fa fa-facebook"></i>
                            </a>
                            <a className="icon" href="/"> <i style={{ paddingLeft: '20px', marginTop: '20px' }} className="fa fa-twitter"></i>
                            </a>
                            <a className="icon" href="/"> <i style={{ paddingLeft: '20px', marginTop: '20px' }} className="fa fa-linkedin"></i>
                            </a>
                            <p style={{ color: '#929191' }}> <i className="fa fa-phone icon1 "></i> &nbsp; +45 677 8993000 223</p>
                            <p style={{ color: '#929191' }}> <i className="fa fa-envelope-o icon2 "></i> &nbsp; office@template.com</p>
                            <p style={{ color: '#929191' }}> <i className="fa fa-map-marker icon2 "></i>
                                &nbsp; Main Str. no 45-46, b3, 56832, Los Angeles, CA</p>
                        </div>
                        <div className="col-md-7 mt-5 ">
                            <form className="contact-form form ">
                                <input type="text" placeholder="Name" className="minif" />
                                <input type="email" placeholder="Email" className="minif" />
                                <textarea rows="15" cols="6" placeholder="Messages" className="minif"></textarea>
                                <center> <button className="btn2 mt-4">Contact Us</button> </center>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <iframe style={{ marginTop: '92px',border: '0'}}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.876706803783!2d76.18048658602467!3d25.73026451819223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396fcc979ae9ed17%3A0x27e447b9dd16a53!2sIndergarh%2C%20Rajasthan%20323613!5e0!3m2!1sen!2sin!4v1686914840483!5m2!1sen!2sin" width={1200} height={500} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </section>

        </>
    )
}
export default Contact;