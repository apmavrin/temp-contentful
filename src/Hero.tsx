import HeroImg from "./assets/hero.svg?react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Tumblr bicycle rights selvage bodega boys yes plz keffiyeh locavore
            shoreditch banjo whatever gastropub man braid. Pok pok beard bodega
            boys enamel pin messenger bag same mlkshk. Occupy keytar pitchfork
            mustache listicle whatever single-origin coffee.
          </p>
        </div>
        <div className="img-container">
          <HeroImg alt="woman and the browser" className="img"/>
        </div>
      </div>
    </section>
  );
};
export default Hero;
