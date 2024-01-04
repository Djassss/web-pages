import F1 from '../img/1.jpg';
import F2 from '../img/2.jpg';
import F3 from '../img/3.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Slider () {
    return(
    <>
    <div className='component-2'>
        <Carousel className='carousel'
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            >
            <div>
                <img src={F1} />
            </div>
            <div >
                <img src={F2} />
            </div>
            <div >
                <img src={F3} />
            </div>
        </Carousel>
    </div>
    </>
    )
}