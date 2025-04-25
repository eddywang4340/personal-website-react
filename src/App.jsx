import React from 'react'
import ModernNavbar from './Components/Navbar/ModernNavbar'
import ModernHero from './Components/Hero/ModernHero'
import ModernAbout from './Components/About/ModernAbout'
import ModernProjects from './Components/Projects/ModernProjects'
import ModernContact from './Components/Contact/ModernContact'
// Import the CSS files
import './index.css'
import './animations.css'

const App = () => {
  return (
    <div style={{ backgroundColor: '#0C2D48', color: 'white', minHeight: '100vh' }}>
      <ModernNavbar />
      <ModernHero />
      <ModernAbout />
      <ModernProjects />
      <ModernContact />
    </div>
  )
}

export default App