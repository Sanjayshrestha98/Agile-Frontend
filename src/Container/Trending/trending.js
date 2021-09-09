import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Form, Row, Col, Container, Card } from "react-bootstrap";
import axios from 'axios'

const Trending = (props) => {
    const { } = props;
    let [data, setData] = useState([]);

    const trending = () =>{
        axios.get(`${process.env.REACT_APP_BASE_URI}/get/trending`)
            .then((response) => {
                console.log(response)
                if (response.data.success == true) {
                    setData(
                        response.data.data
                    )
                }
                else {
                    setData([])
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        trending()
    }, [])


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 6,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 6,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <div className="hero-test">
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>{cssstyle}</style>
                <h2 className="tg">Trending Games Right Now</h2>
                <Slider {...settings}>
                    {
                        data.map((val) => {
                            return (
                                <div className="hglh">
                                    <Card className="crgd">

                                        <img className="imgrs" alt="" src={`${process.env.REACT_APP_BASE_URI}/public/images/${val.product.image}`} />
                                        <Card.Body className="hlgh">
                                            <h3 id="hemd">{val.product.productname}</h3>
                                        
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }


                </Slider>
            </div>
        </React.Fragment>
    )
}



const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
export default Trending