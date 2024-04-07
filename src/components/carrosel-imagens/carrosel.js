import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import foto1 from '../../arquivos/fotoBanner/ELE VIVE.png'
import foto2 from '../../arquivos/fotoBanner/ELE É.png'
import foto3 from '../../arquivos/fotoBanner/ELE PODE.jpg'


export default function Carrosel() {

return (<>
        <div className="carousel-wrapper">
            <Carousel showThumbs={false}
                      infiniteLoop={true}
                      stopOnHover={true}
                      interval={2000}>
                <div>
                    <img src={foto1} />
                </div>
                <div>
                    <img src={foto2} />
                </div>
                <div>
                    <img src={foto3} />
                </div>
            </Carousel>
        </div>
    </>)
}