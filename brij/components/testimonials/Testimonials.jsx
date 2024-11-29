import "./testimonialStyle.css";
import { image } from "../../public/assets/assets";
import { testimonialData } from "../../public/assets/assets";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {testimonialData.map((item, index) => (
        <div className="testimonial-card" key={index}>
          <Image src={item.image} alt="" width={50} height={50} />
          <h1>{item.name}</h1>
          <p>{item.testament} </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
