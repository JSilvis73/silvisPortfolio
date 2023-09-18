import "./App.css";
import { Navbar } from "./components/navbar";
import { Personal } from "./pages/personal/personal";
import { Projects } from "./pages/projects/projects";
import { Contact } from "./pages/contact/contact";
import { Footer } from "./components/footer";
import { FadeInSection } from "./fadeInSection.js";

function App() {
  return (
    <body>
      <div className="App">
        <main>
          <Navbar />

          <section id="personalSection">
            <Personal />
          </section>

          <FadeInSection>
            <section id="projectsSection">
              <Projects />
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="contactSection">
              <Contact />
            </section>
          </FadeInSection>

          <Footer />
        </main>
      </div>
    </body>
  );
}

export default App;
