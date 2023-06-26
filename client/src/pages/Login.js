import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";


export function Login(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        event.target.reset();
        setInputs({})
        if(!inputs.name || !inputs.email){
            alert("Please fill the form")
        }
        else{
            alert("Thank you for your submission")
            window.location.href="/project"
        }

    }

    return(

        <Card className={"Login"}>
            <Card.Body>
                <Card.Title className={" mb-4 card-title"}>Form</Card.Title>
                <Card.Text className={"text-bg-info card-text"}>To access the project, please fill the form below</Card.Text>

                    <form className={"form-group"}   onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label  className="form-label">Username </label>
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
                            <button type="submit" className="btn btn-primary"  >Submit</button>
                        </div>
                    </form>

            </Card.Body>
        </Card>


    )

}