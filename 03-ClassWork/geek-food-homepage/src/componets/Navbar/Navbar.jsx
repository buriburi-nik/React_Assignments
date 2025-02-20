import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
          <div className="nav-logo">
        <img src='/Food_Network_New_Logo.png' alt="logo" />
        
          </div>   
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#quote">Quote</a></li>
            <li><a href="#restaurants">Restaurants</a></li>
            <li><a href="#foods">Foods</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className='nav-btn'>Get Started</button>
   </nav>
  )
}
