import { Gallery } from "react-grid-gallery";
import img_in1 from '../image/img_in1.jpg';
import img_in2 from '../image/img_in2.jpg';
import img_in3 from '../image/img_in3.jpg';
import img_in4 from '../image/img_in4.jpg';
import img_in5 from '../image/img_in5.jpg';
import img_in6 from '../image/img_in6.jpg';
import img_out1 from '../image/img_out1.jpg';
import img_out2 from '../image/img_out2.jpg';
import img_out3 from '../image/img_out3.jpg';
import { useEffect, useState } from "react";

const images = [
    {
        src: img_in3,
        width: 400,
        height: 185

    },    
    {
        src: img_out2,
        width: 300,
        height: 400

    },
    {
        src: img_in1,
        width: 300,
        height: 400
    },
    {
        src: img_in6,
        width: 800,
        height: 610
    },
    {
        src: img_in4,
        width: 400,
        height: 225
    },
    {
        src: img_in2,
        width: 300,
        height: 400
    },
    {
        src: img_out3,
        width: 400,
        height: 225
    }

]

function Products() {
    const [isMobile, setGallery] = useState(window.innerWidth < 1080);

    const updateGallery = ()=> {
        setGallery(window.innerWidth < 1080);
    };

    useEffect(()=>{
        window.addEventListener("resize", updateGallery);
    });

    return (
        <Gallery images={images} enableImageSelection={false} maxRows={isMobile ? 2 : 1}/>
    );
};

export default Products;