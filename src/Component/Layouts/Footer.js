function Footer() {
    return (
        <>
            <section className="footerban" >
            <div className="container-fluid mt-5 pb-5 "
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.800)', width: '100%', height: '100%' }} >
            <div className="container p-5 " >
            <div className="row" >
            <div className="col-md-3 mt-5 ">
                <h2 style={{ marginTop: '10px' }}><a href="index.html"> <img
                    src="https://preview.colorlib.com/theme/thecharity/images/logo.png.webp" className="nav"
                    alt="/" /></a></h2>
                <p style={{
                    fontSize: '16px', lineHeight: '2', color: '#929191', marginTop: '50px', textAlign: 'justify'
                }}>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum
                    mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum
                    mauris.Lorem ipsum dolo.</p>
                <a className="icon" href="/"><i className="fa fa-instagram"></i></a>
                <a className="icon" href="/"><i style={{ paddingLeft: '20px', marginLeft: '20px', marginTop: '20px' }}
                    className="fa fa-facebook"></i> </a>
                <a className="icon" href="/"> <i style={{ paddingLeft: '20px', marginLeft: '20px', marginTop: '20px' }}
                    className="fa fa-twitter"></i> </a>
                <a className="icon" href="/"> <i style={{ paddingLeft: '20px', marginLeft: '20px', marginTop: '20px' }}
                    className="fa fa-linkedin"></i> </a>
            </div>

            <div className="col-md-2 mt-5 ps-5 ">
                <h2 className="h2">Useful Links</h2>
                <a className="fotuse" href="/">Privacy Polticy</a> <br />
                <a className="fotuse" href="/">Become a Volunteer</a> <br />
                <a className="fotuse" href="/">Donate</a> <br />
                <a className="fotuse" href="/">Testimonials</a> <br />
                <a className="fotuse" href="/">Causes</a> <br />
                <a className="fotuse" href="/">Portfolio</a> <br />
                <a className="fotuse" href="/">News</a>
            </div>

            <div className="col-md-1"></div>
            <div className="col-md-2 mt-5 ">
                <h2 className="h2">Latest News</h2>
                <a className="fotn" href="/">A new cause to help</a>
                <p style={{ color: '#ff4800', lineHeight: '35px' }}>MArch 12, 2018</p> <br /> "
                <a className="fotn" href="/">We love to help people</a>
                <p style={{ color: '#ff4800', lineHeight: '35px' }}>MArch 12, 2018</p> <br />
                <a className="fotn" href="/">The new ideas for helping</a>
                <p style={{ color: '#ff4800', lineHeight: '35px' }}>MArch 12, 2018</p>
            </div>

            <div className="col-md-4 mt-5 ps-5 ">
                <h2 className="h2">Contact</h2>
                <div className="box">
                    <p style={{ color: '#929191' }}> <i className="fa fa-phone icon1 "></i> &nbsp; +45 677 8993000 223
                    </p>
                    <p style={{ color: '#929191' }}> <i className="fa fa-envelope-o icon2 "></i> &nbsp;
                        office@template.com</p>
                    <p style={{ color: '#929191' }}> <i className="fa fa-map-marker icon2 "></i>
                        &nbsp; Main Str. no 45-46, b3, 56832, Los Angeles, CA</p>
                </div><br />
                <form style={{display:'flex'}}>
                    <input type="text" name="/" placeholder="Your Email" className="form-control" />
                    <a href="/"> <button className="btn btn-danger "
                        style={{ backgroundColor: '#ff4800', marginRight: '20px' }}>SEND</button></a>
                </form> <br /><br />
                <a style={{textDecoration:'none'}} href="/"> <button
                    className="btn btn-success ms-5 circle circle2  " id="top"> <i
                        style={{fontSize: '40px',color: 'black'}} className="fa fa-hand-o-up"></i>
                </button></a>
            </div>
        </div >

            </div >
        </div >
    </section > 

    <section> 
        <div class="container-fluid text-center p-4 bg-dark">
            <span style={{color: '#b1b0b0'}}>Copyright ©2023 All rights reserved | This template is made with by Rahul
                Kushwaha</span>
        </div>
    </section> 
     </>
    )
}
export default Footer;