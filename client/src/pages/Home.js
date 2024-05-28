import { Container, Figure } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import walk from "../walk.svg";

//Home Component
export function Home() {
  //Render the content
  return (
    <div>
      <Container className={"Home"}>
        {walk && (
          <div
            className={
              "typewriter m-3 d-flex justify-content-center align-items-center "
            }
          >
            <h4>
              <span
                className="text-primary-emphasis"
                style={{ fontSize: "2.5rem" }}
              >
                Hi!
              </span>{" "}
              I'm Abinash Mainali
            </h4>
            <img src={walk} alt="" className="walker" />
          </div>
        )}

        <Figure className={"Home"}>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            roundedCircle
            src={
              "https://avatars.githubusercontent.com/u/27627798?s=400&u=40dbf5a57c35c3036dabf067e0c429ca86f80c23&v=4"
            }
          />
        </Figure>
        <h2>Software Developer</h2>
        <p>
          I'm a Software Developer based in Sunshine Coast, Australia. <br />{" "}
          Want to know more? Follow the links!{" "}
        </p>
        <div className={"web-link"}>
          <a
            href="https://www.linkedin.com/in/abinash-mainali-2019291a4/"
            className="m-2 d-inline-block"
            target="_blank"
            rel="noreferrer noopenner"
          >
            <FaLinkedin className="icon" size={50} color={"black"} />
          </a>
          <a
            href="https://github.com/AbinashMainali"
            className={"m-2 d-inline-block"}
            target={"_blank"}
            rel="noreferrer noopenner"
          >
            <FaGithub className="icon" size={50} color={"black"} />
          </a>
          <a
            href="https://www.instagram.com/abinash_mainali/"
            className={"m-2 d-inline-block"}
            target={"_blank"}
            rel="noreferrer noopenner"
          >
            <FaInstagram className="icon" size={50} color={"black"} />
          </a>
        </div>
      </Container>
    </div>
  );
}
