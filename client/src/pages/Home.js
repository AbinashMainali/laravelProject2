import {Container, Figure} from "react-bootstrap";

export function Home() {

    return (<div>
            <Container className={"Home"}>
                <div className={"Home-header m-3 text-success-emphasis"}>
                    <h1>Hi! I am Abinash Mainali</h1>
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
                <h2>Graduate Software Developer</h2>
                <p> I am a graduate software developer with a year of experience in developing web applications using
                    React, Node, and PHP.
                    I have a Bachelor's degree in Information Technology from the University of Sunshine Coast. </p>
                <div className={"web-link"}>
                    <a href="https://www.linkedin.com/in/abinash-mainali-1b1b3a1b0/" className={"m-2 d-inline-block"}>
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" width="50"
                             height="50"/>
                    </a>
                    <a href="https://github.com/AbinashMainali" className={"m-2 d-inline-block"}>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width="50"
                             height="50"/>
                    </a>
                    <a href="https://www.instagram.com/abinash_mainali/" className={"m-2 d-inline-block"}>
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="instagram" width="50"
                             height="50"/>
                    </a>
                </div>


            </Container>
        </div>


    )
}