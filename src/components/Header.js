// KEY CONCEPTS
// .js is the barebone content only
// .css is the styling of the content
// useState for state management
// className is related to the CSS file(s)
// onClick handles user interaction
// aria- is to improve accessibility
// the logo is displayed as an image with alternative text

// Import react and useState to manage state
import React, {useState} from 'react';

// Import the CSS file to style the header component
import '../CSS/Header.css';

// This is the main header component
function Header() {

    //  Define a state variable 'isNavOpen' to tract whether the navigation menu is open or closed
    // 'setNavOpen' is the function used to update 'isNavOpen'
    const [isNavOpen, setNavOpen] = useState(false);

    // This function toggles the navigation menu between open and closed states
    const toggleNav = () => setNavOpen(!isNavOpen);

    // Once an item is clicked on, it closes the navigation menu
    const closeNav = () => setNavOpen(false);

    return (
        // The main container for the header component
        <header className="header">

            {/* <section id="home" className="section-home"> */}
            {/* Background image container */}
            <div 
            className="bg-image" 
            style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/bluepurplegradient.jpg)`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '20vh',
                width: '100%',
            }}
            ></div>
            {/* </section> */}

            {/* Edit the Logo here */}
            <img 
                src="src/assets/images/logos/blurrylogomechanic_enhanced.jpg"
                alt="Logo" 
                className="header-logo" 
            />

            {/* Edit the navigation here */}
            <nav>

                {/* This is how the buttons react to use input */}
                <button 
                    className="nav-toggle" 
                    onClick={toggleNav}
                    // Accessibility attribute indicating whether the menu is open
                    aria-expanded={isNavOpen}
                    // Accessibility attribute linking the button to the menu
                    aria-controls="nav-menu"
                >
                    {/* If the Nav is open, it changes the hamburger to an X */}
                    {isNavOpen ? '✕' : '☰'}
                </button>

                {/* This is how clicking on a button redirects users to the correct page */}
                <ul id="nav-menu" className={isNavOpen ? "open" : ""}>
                    <li><a href="#home" onClick={closeNav}>Home</a></li>
                    <li><a href="#tips" onClick={closeNav}>Tips</a></li>
                    <li><a href="#services" onClick={closeNav}>Services</a></li>
                    <li><a href="#about" onClick={closeNav}>About Us</a></li>
                    <li><a href="#contact" onClick={closeNav}>Contact Us</a></li>
                    <li><a href="#more" onClick={closeNav}>More</a></li>
                </ul>
            </nav>
        </header>
    );
}

// Export the header component so it can be used throughout the application
export default Header; 