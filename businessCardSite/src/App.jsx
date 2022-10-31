import "./App.css";
import ProfilePic from "./components/ProfilePic";
import ContactSection from "./components/ContactSection";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <ProfilePic />
      <ContactSection />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
