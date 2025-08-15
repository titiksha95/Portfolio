import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "./styles.css"; // custom CSS
import AOS from "aos";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm glass-nav fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-gradient" href="#home">
            Titiksha Jangid
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              {["About", "Skills", "Projects"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link nav-hover"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}

              {/* GitHub Icon */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/titiksha95" // Your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-github"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/titiksha-jangid-95tj95/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="mailto:jangidtitiksha@gmail.com"
                >
                  <i
                    className="bi bi-envelope-fill"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section d-flex align-items-center text-light"
      >
        <div className="container text-center" data-aos="fade-up">
          <h1 className="fw-bold display-4">
            Hi, I'm <span className="text-gradient">Titiksha</span>
          </h1>
          <h4 className="mb-3">Frontend Developer | AI & ML Enthusiast</h4>
          <p className="lead mb-4">
            I build responsive web apps and AI-driven solutions with creativity
            & precision.
          </p>
          <div>
            <a
              href="src/assets/resume.pdf"
              className="btn btn-gradient me-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5 section-bg">
        <div className="container" data-aos="fade-right">
          <h2 className="mb-4 fw-bold text-center text-gradient">About Me</h2>
          <p
            className="text-center mx-auto"
            style={{ maxWidth: "800px", lineHeight: "1.8" }}
          >
            I am currently pursuing my B.Tech in Artificial Intelligence &
            Machine Learning from JIET, Jodhpur (Graduating 2026) with a CGPA of
            8.0/10. My journey into tech began with curiosity about how websites
            work and evolved into a deep passion for frontend development and
            AI-driven problem solving.
            <br />
            <br />
            As a frontend developer, I specialize in crafting responsive,
            modern, and accessible web applications using React.js, Bootstrap,
            and JavaScript (ES6+). On the AI side, I have worked with Python,
            TensorFlow, and OpenCV to develop innovative solutions such as
            real-time emotion recognition and plant disease detection systems.
            <br />
            <br />
            I believe in building projects that are both visually appealing and
            functionally robust, while following best practices for clean,
            maintainable code. Beyond coding, I enjoy collaborating in team
            environments, leading hackathon projects, and sharing my knowledge
            with peers.
            <br />
            <br />
            My goal is to merge creativity with technology, delivering impactful
            solutions that enhance user experiences and solve real-world
            problems.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Skills */}
      <section id="skills" className="py-5">
        <div className="container" data-aos="zoom-in">
          <h2 className="fw-bold text-center mb-4 text-gradient">Skills</h2>
          <div className="row text-center">
            {[
              {
                title: "Frontend",
                items:
                  "HTML5, CSS3, Bootstrap, JS (ES6+), React.js, API Integration, Git",
              },
              { title: "Backend & DB", items: "Node.js, MongoDB, SQL" },
              { title: "AI & Tools", items: "Python, NumPy, Pandas, OpenCV" },
              {
                title: "Soft Skills",
                items:
                  "Communication, Problem-Solving, Leadership, Team Collaboration",
              },
            ].map((skill, idx) => (
              <div className="col-md-3 mb-3" key={idx}>
                <div className="card skill-card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="fw-bold">{skill.title}</h5>
                    <p className="text-muted">{skill.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5 section-bg">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center mb-4 text-gradient">Projects</h2>
          <div className="row">
            {[
              {
                name: "E-Commerce Web App",
                desc: "A computer vision system for matching and verifying images with high precision.",
                tech: "React.js, Node.js, MongoDB, SQL",
                link: "https://github.com/titiksha95/cart-catalyst-engine.git",
                img: "src/assets/image1.png",
              },
              {
                name: "AI-Powered Face Emotion Recognition",
                desc: "Real-time CNN-based emotion classification.",
                tech: "Python, TensorFlow, OpenCV",
                link: "https://github.com/titiksha95/Face-sentiment-analysis.git",
                img: "src/assets/image2.jpg",
              },
              {
                name: "Image Matcher",
                desc: "Plant disease detection system with 92% accuracy.",
                tech: "Python, OpenCV, TensorFlow, ROS",
                link: "https://github.com/titiksha95/Face-Image-Matcher.git",
                img: "src/assets/image3.jpg",
              },
            ].map((proj, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card project-card shadow-sm h-100">
                  <img
                    src={proj.img}
                    className="card-img-top project-img"
                    alt={proj.name}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">{proj.name}</h5>
                    <p>{proj.desc}</p>
                    <span className="badge bg-secondary me-2">{proj.tech}</span>
                    <div className="mt-3">
                      <a
                        href={proj.link}
                        target="_blank"
                        className="btn btn-sm btn-gradient"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Contact */}
      <section id="contact" className="py-5 section-bg">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center mb-4 text-gradient">Contact</h2>

          {/* Toast Notification */}
          <div
            id="successToast"
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              zIndex: 1050,
              minWidth: "250px",
              display: "none",
              background: "linear-gradient(90deg, #56ab2f, #a8e063)",
              color: "white",
              padding: "15px 20px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              fontWeight: "500",
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            ✅ Your message has been sent!
          </div>

          {/* Contact Form */}
          <form
            className="mx-auto glass-form p-4"
            style={{ maxWidth: "600px" }}
            onSubmit={(e) => {
              e.preventDefault();

              // Show toast
              const toast = document.getElementById("successToast");
              toast.style.display = "block";

              // Clear form
              e.target.reset();

              // Hide toast after 3 sec
              setTimeout(() => {
                toast.style.animation = "fadeOut 0.5s ease-in-out";
                setTimeout(() => {
                  toast.style.display = "none";
                  toast.style.animation = "fadeIn 0.5s ease-in-out";
                }, 500);
              }, 3000);
            }}
          >
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              required
            />
            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn-gradient w-100">
              Send
            </button>
          </form>

          <div className="text-center mt-4">
            <a
              href="https://github.com/titiksha95"
              target="_blank"
              className="me-3 text-dark"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/titiksha-jangid-95tj95/"
              target="_blank"
              className="me-3 text-dark"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jangidtitiksha@gmail.com?subject=Hello%20Titiksha&body=I%20wanted%20to%20reach%20out%20to%20you."
              className="me-3 text-dark"
            >
              Email
            </a>
            <span>📞 +91-9352484452</span>
          </div>
        </div>

        {/* Toast Animations */}
        <style>
          {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
      }
    `}
        </style>
      </section>

      {/* Footer */}
      <footer className="text-light py-3 text-center glass-nav">
        © {new Date().getFullYear()} Titiksha Jangid | All Rights Reserved
      </footer>
    </div>
  );
}
