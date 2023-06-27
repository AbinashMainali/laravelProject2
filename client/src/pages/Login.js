import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import http from "../helper/http";

//Login component
export function Login() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    //handle input change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]: value}));
    }
    //handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        event.target.reset();
        setInputs({})
        if (!inputs.name || !inputs.email) {
            alert("Please fill the form")
        } else {
            alert("Thank you for your submission")
            //Send HTTP post request to create user
            http.post("/users/", inputs).then((response) => {
                console.log(response);
                //Navigate to project page
                navigate("/project");
            }).catch((error) => {
                    console.log(error);

                }
            );
        }
    }


    return (

        <Card className={"Login"}>
            <Card.Body>
                <Card.Title className={" mb-4 card-title"}>Form</Card.Title>
                <Card.Text className={"text-bg-info card-text"}>To access the project, please fill the form
                    below</Card.Text>

                <form className={"form-group"} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control mb-2"
                            placeholder="Username"
                            value={inputs.name || ""}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control mb-2"
                            placeholder="Email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />

                    </div>

                    <div className={"d-grid gap-2"}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </Card.Body>
        </Card>


    )

}