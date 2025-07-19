

import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import { About } from './components/About/About.jsx';
import {Experience} from './components/Experience/Experience.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Contact } from './components/Contact/Contact.jsx';

import { getImageUrl } from "../src/utils.js";

function App() {
  

  return (
    <>
    <div className={styles.App}>
      <Navbar />
      <Hero />
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
    </div>
    </>
  )
}

export default App
