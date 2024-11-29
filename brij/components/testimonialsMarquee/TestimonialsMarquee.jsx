import "./testimonialsMarquee.css";
import Marquee from "react-fast-marquee";
import Testimonials from "../testimonials/Testimonials";

const TestimonialsMarquee = () => {
  return (
    <div className='testimonials-Marquee' >

        <Marquee direction="right"
        pauseOnHover={true}
        speed={50}
        >
            <Testimonials/>
        </Marquee>


        <Marquee
        direction="left"
        pauseOnHover={true}
        speed={50}>
            <Testimonials/>
        </Marquee>
    
    </div>
  );
};

export default TestimonialsMarquee;
