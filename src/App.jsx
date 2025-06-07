import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Introduce from "./components/Introduce/Introduce.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Interest from "./components/Interest/Interest.jsx";
import EnlargeImage from "./components/EnlargeImage/EnlargeImage.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [pathImage, setPathImage] = useState("");
  const handleEnlargeImage = (status, path) => {
    setIsEnlarged(status);
    path ? setPathImage(path) : setPathImage("");
  };
  return (
    <div className={styles.App}>
      {isEnlarged ? (
        <EnlargeImage
          handleEnlargeImage={handleEnlargeImage}
          path={pathImage}
        />
      ) : (
        ""
      )}
      <Navbar />
      <Introduce handleEnlargeImage={handleEnlargeImage} />
      <About />
      <Experience />
      <Certificates />
      <Projects />
      <Interest handleEnlargeImage={handleEnlargeImage} />
      <Contact />
    </div>
  );
}

export default App;
