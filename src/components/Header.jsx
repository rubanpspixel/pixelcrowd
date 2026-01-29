import '../css/header.scss'

export default function Header() {
  return (
    <header className="header"> 
      <div className="container">   
          <div className="grid">
              <h2 className="logo">Pixelcrowd</h2>
              
              {/* <nav className="nav">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
              </nav> */}
          </div>
      </div> 
    </header>
  );
}
