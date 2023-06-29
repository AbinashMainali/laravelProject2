import {Container, Figure} from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


//Home Component
export function Home() {
    //Render the content
    return (<div>

            <Container className={"Home"}>
                <div className={"Home-header m-3 text-success-emphasis"}>
                    <h4><span style={{fontSize: "2rem"}}>Hi!</span> I'm Abinash Mainali</h4>
                </div>


                <Figure className={"Home"}>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        roundedCircle
                        src={"https://avatars.githubusercontent.com/u/27627798?s=400&u=40dbf5a57c35c3036dabf067e0c429ca86f80c23&v=4"}
                    />


                </Figure>
                <h2>Software Developer</h2>
                <p>I'm a Software Developer based in Sunshine Coast, Australia. <br/> Want to know more? Follow the links! </p>
                <div className={"web-link"}>
                    <a href="https://www.linkedin.com/in/abinash-mainalli-2019291a4/" className={"m-2 d-inline-block"} target={"_blank"}  rel="noreferrer">
                       
                        <FaLinkedin className="icon" size={50} color={"black"}/>

                    </a>
                    <a href="https://github.com/AbinashMainali" className={"m-2 d-inline-block"} target={"_blank"}  rel="noreferrer">

                        <FaGithub className="icon" size={50} color={"black"} />
                    </a>
                    <a href="https://www.instagram.com/abinash_mainali/" className={"m-2 d-inline-block"} target={"_blank"}  rel="noreferrer">
                        {/*<img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="instagram" width="50"*/}
                        {/*     height="50"/>*/}
                        <FaInstagram className="icon" size={50} color={"black"}/>
                    </a>
                </div>


            </Container>

        </div>


    )
}