import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon1 from "../Icons/icon1.png";
import icon2 from "../Icons/icon2.png";
import icon3 from "../Icons/icon3.png";
import icon4 from "../Icons/icon4.png";
import icon5 from "../Icons/icon5.png";
import icon6 from "../Icons/icon6.jpg";
import icon7 from "../Icons/icon7.png";
import icon8 from "../Icons/icon8.png";
import icon9 from "../Icons/icon9.png";
import icon10 from "../Icons/icon10.png";
import icon11 from "../Icons/icon11.png";
import icon12 from "../Icons/icon12.jpg";
import icon13 from "../Icons/icon13.png";
import icon14 from "../Icons/icon14.png";


export default function HomePage() {

   const images = [
      icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14
   ];


   return (
      <div className="App-background">
         <div className="text-center">
            <h1 className="text-white">PHẦN MỀM THEO DÕI ĐIỆN THOẠI TỪ XA</h1>
            <Link to="/validate">
            <div className="icons">
               {images.map((imgSrc, index) => (
                  <img key={index} src={imgSrc} alt={`Image ${index + 1}`} />
               ))}
            </div>
            </Link>
         </div>
      </div>
   );
}
