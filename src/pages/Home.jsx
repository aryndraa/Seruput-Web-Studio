import React, { useEffect, useState } from "react";
import "./pages.css";
import drink from "./undraw_drink_coffee_v3au (1).svg";
import ask from "./undraw_faq_re_31cw.svg";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
import web from "./web-img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";
// import { useLocation } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";

const Home = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 700;
      const opacity = 1 - scrollPosition / maxScroll;
      const clampedOpacity = Math.max(0, Math.min(opacity, 1));
      setScrollOpacity(clampedOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const home1Style = {
    opacity: scrollOpacity,
  };

  const location = useLocation();
  useEffect(() => {
    // Check if the URL has a hash
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));

      if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="body">
      <section className="home1" id="home-1" style={home1Style}>
        <div className="kontent">
          <img className="img-top" src={drink} alt="" />
          <h1>
            Seruput <span>Web Studio</span>
          </h1>
          <p>
            Wujudkan Website Impian Anda Dengan Desain Yang Menarik Dan Modern
          </p>
          <div className="link">
            <a href="#home-2">Klik Selanjutnya</a>
            <Link className="kontaklink" to="/paket-website">
              Cek Harga
            </Link>
          </div>
        </div>
        <img className="img-bot" src={drink} alt="" />
      </section>
      <section className="home2" id="home-2">
        <div className="kontent2">
          <div className="kontainer">
            <h2>
              <span>Mengapa</span> Pilih Kami?
            </h2>
            <div className="backgroun2">
              <img src={ask} alt="" />
            </div>
            <p>
              Jasa kami menawarkan pembuatan web klasik dengan harga yang
              terjankau. dengan ini dapat membantu anda untuk membuat web bisnis
              pertama anda.
            </p>
            <p>
              Kami juga menawarkan sampel-sampel website yang dapat membantu
              anda menacari inspirasi model desain web yang anda ingin buat.
            </p>

            <Link to="#example" class="cta">
              <span>Lihat Sampel Website</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
          <div className="backgroun"></div>
        </div>
      </section>
      <section className="example" id="example">
        <div className="kontainer3">
          <h2>
            Sampel <span>Website</span>
          </h2>
          <p>Desain yang mungkin dapat membantu anda untuk mencari inspirasi</p>
          <div className="card-containner">
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={web} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Link href="#">Lihat website</Card.Link>
                <Card.Link href="#">Daftarkan</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={web} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Link href="#">Lihat website</Card.Link>
                <Card.Link href="#">Daftarkan</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={web} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Link href="#">Lihat website</Card.Link>
                <Card.Link href="#">Daftarkan</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={web} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Link href="#">Lihat website</Card.Link>
                <Card.Link href="#">Daftarkan</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={web} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Link href="#">Lihat website</Card.Link>
                <Card.Link href="#">Daftarkan</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={web} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Link href="#">Lihat website</Card.Link>
                <Card.Link href="#">Daftarkan</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
