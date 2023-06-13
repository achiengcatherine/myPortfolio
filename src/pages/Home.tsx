import Navbar from "../components/Navbar";
import kate from "/kate.jpg";
import facebook from "/fb.png";
import instagram from "/insta.jpeg";
import linkedin from "/linkedin.png";
import tweet from "/tweetor.jpeg";
import whatsapp from "/whatsapp.png";

function Home() {
  return (
    <div className="homepage">
      <div className="personalinfo">
        <img src={kate} className="profile" alt="profile" />
        <h2>Catherine Onyango</h2>
        <h3>Front End Developer</h3>
        <Navbar/>
      </div>

      <div className="content">
        <p>
          <h3> Hi There...</h3>
          My Name is <b>Catherine Onyango</b>
          <h2>I Am A Front-End Developer</h2>
        </p>
        <button className="btn">Hire Me</button>
        <div className="info">
          <img src={linkedin} className="linkedin" alt="profile" />
          <img src={facebook} className="fb" alt="profile" />
          <img src={instagram} className="insta" alt="profile" />
          <img src={whatsapp} className="whatsapp" alt="profile" />
          <img src={tweet} className="tweet" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
