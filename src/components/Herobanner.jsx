import "../css/herobanner.scss";
import HeroImage from '../assets/pixel-banner.png';


export default function HeroBanner () {
  return (
    <section className="hero">   
      <div className="container">
          <div className="hero-content">
            <h1>Design. <br />Code. <br />Experience.</h1>
            <p>We craft intuitive digital products &<br /> visual experiences that help brands grow.</p>
            <span>UI/UX • Frontend • Visual Design • WordPress</span>           
          </div>
          <div className="heroImage">               
              <img src={HeroImage} alt="Pixelcrowd" />
          </div>
      </div>   
    </section>
  );
}
