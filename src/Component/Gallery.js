function Gallery (){
    return(
        <>
         <section className="aboutimg"> 
        <div className="container-fluid " style={{backgroundColor: 'rgba(0, 0, 0, 0.684)', width: '100%', height:'100%'}}>
            <div className="container pt-5">
                <div className="row mt-4">
                    <h1 className="abouttext1">Portfolio</h1>
                    <div className="underline mt-2 ms-3"></div>
                </div>
            </div>
        </div>
    </section>

    <section> 
        <div className="container-fluid mt-5">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4">
                        <a href="/"> <img src="https://preview.colorlib.com/theme/thecharity/images/a.jpg.webp"
                                className="img-fluid" alt=""/></a>
                        <h3 className="profiletext mt-3">Toys for Children Campaign</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>
                    </div>
                    <div className="col-md-3">
                        <a href="/"><img src="https://preview.colorlib.com/theme/thecharity/images/b.jpg.webp"
                                className="img-fluid img2018 " alt=""/></a>
                        <h3 className="profiletext mt-3">Toys for Children Campaign</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>


                    </div>
                    <div className="col-md-5">
                        <a href="/"><img src="https://preview.colorlib.com/theme/thecharity/images/c.jpg.webp"
                                className="img-fluid" alt=""/></a>
                        <h3 className="profiletext mt-3">Water for Children AID</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>

                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-md-5">
                        <a href="/"> <img src="https://preview.colorlib.com/theme/thecharity/images/d.jpg.webp"
                                className="img-fluid" alt=""/></a>
                        <h3 className="profiletext mt-3">Water for Children AID</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>


                    </div>
                    <div className="col-md-3 mt-5">
                        <a href="/"> <img src="https://preview.colorlib.com/theme/thecharity/images/e.jpg.webp"
                                className="img-fluid img2018 " alt=""/></a>
                        <h3 className="profiletext mt-3">Toys for Children Campaign</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>


                    </div>
                    <div className="col-md-4 mt-5">
                        <a href="/"> <img src="https://preview.colorlib.com/theme/thecharity/images/f.jpg.webp"
                                className="img-fluid" alt=""/></a>
                        <h3 className="profiletext mt-3">Toys for Children Campaign</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <a href="/"> <img src="https://preview.colorlib.com/theme/thecharity/images/g.jpg"
                                className="img-fluid img2018 " alt=""/></a>
                        <h3 className="profiletext mt-3">Toys for Children Campaign</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>
                    </div>
                    <div className="col-md-6">
                        <a href="/"> <img src="https://preview.colorlib.com/theme/thecharity/images/h.jpg"
                                className="img-fluid" alt=""/></a>
                        <h3 className="profiletext mt-3">Water for Children AID</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>
                    </div>
                    <div className="col-md-3">
                        <a href="/"> <img src="https://preview.colorlib.com/theme/thecharity/images/i.jpg"
                                className="img-fluid img2018 " alt=""/></a>
                        <h3 className="profiletext mt-3">Toys for Children Campaign</h3>
                        <h4 className="profilepera mt-2">2018 Causes</h4>
                    </div>
                </div>
                <div className="row mt-5 pb-5">
                    <div className="col-md-12 text-center mt-3 pb-3">
                        <a href="/"> <button className="btn2">Load More </button> </a>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </>

    )   
}

export default Gallery;