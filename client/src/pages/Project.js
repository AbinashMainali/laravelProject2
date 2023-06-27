import {useEffect, useState} from "react";
import http from "../helper/http";


export function Project() {
    const [users, setUsers] = useState([]);
    const [userComment, setUserComment] = useState("");
    const [commentList, setCommentList] = useState([]);
    const [id, setId] = useState("");

    const fetchAllUsers = () => {
        http
            .get("/users")
            .then((response) => {
                const userData = response.data ? response.data[0] : {};
                setUsers(userData.name);
                setId(userData.id);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const fetchAllComments = () => {
        http
            .get("/users")
            .then((response) => {
                const commentData = response.data || [];
                setCommentList(commentData);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchAllUsers();
        fetchAllComments();


    }, []);


    const handleCommentChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserComment((values) => ({...values, [name]: value}));
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    }


    const handleSubmit = () => {
        if (!userComment) {
            alert("Please enter comment")
        } else {

            http.put("/users/" + id, userComment).then((response) => {
                console.log(response);
                setUserComment("");
                fetchAllComments();
            }).catch((error) => {
                    console.log(error);

                }
            );
        }
    }

    return (
        <div className={"Project "}>

            <div className={"Project-header"}>

                <div className={"Project-header-content "}>

                    <p>Hi {users},</p>
                    <p>Welcome to the Projects.</p>

                </div>


                <div className={"Project-body"}>
                    <div className={"Project-body-content card text-start m-2 p-2 shadow-sm "}>
                        <a href="https://triviacontest.azurewebsites.net" title={"Trivia"}
                           className={"link-success text-decoration-none link-opacity-50-hover"}>
                            <h2>Trivia</h2>
                        </a>
                        <p>Trivia is a web application that allows users to play trivia games. The application is built
                            using React, Node.js, Express, and MongoDB. The application is hosted on Azure .</p>
                        <label className={"text-info small"}>Application takes time to load on first attempt</label>


                    </div>
                    <div className={"Project-body-content card text-start m-2 p-2 shadow-sm"}>
                        <a href="https://counterstrikeonblogge.blogspot.com/" title={"Counter Strike"}
                           className={"link-success text-decoration-none link-opacity-50-hover"}>
                            <h2>Counter Strike</h2>
                        </a>
                        <p>CounterStrike was my favorite game back when I was school. I just started coding that time.
                            So, with basic knowledge of HTML and CSS,
                            I created this blog site which gives info about game installation and game server active and
                            inactive connection.
                            However, this a not a responsive blog site.</p>

                    </div>
                    <div className={"Project-body-content card text-start m-2 p-2 shadow-sm"}>
                        <a href={"https://github.com/AbinashMainali/React-laravel-demo"} title={"React-laravel-Project"}
                           className={"link-success text-decoration-none link-opacity-50-hover"}>
                            <h2>React-laravel-Project</h2>
                        </a>
                        <p>React-laravel-Project is a web application that allows users to create, read, update, and
                            delete (CRUD) data. The application is built using React, Laravel, and MySQL. The
                            application
                            is not yet deployed. But you can visit the github for code work.</p>

                    </div>
                </div>
                <div className={"Project-footer "}>
                    <div className={"Project-footer-content"}>
                        <div
                            className={"Project-footer-content bg-secondary text-white card text-start m-2 p-2 shadow-sm"}>
                            <h2>Comment</h2>
                            <p>Leave a comment</p>
                            <form>
                                <div className="form-group">

                                    <label htmlFor="exampleFormControlTextarea1">Comment</label>
                                    <textarea
                                        name="comment"
                                        className="form-control mb-2"
                                        placeholder="Comment"
                                        rows={1}
                                        value={userComment.comment || ""}
                                        onChange={handleCommentChange}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                            </form>
                            <div>
                                {
                                    commentList.map((comment, index) => {

                                            return(

                                            <div key={index} className={"comment "}>
                                                {comment.comments && (
                                                    <>
                                                        {comment.name && (
                                                            <label
                                                                className={"commentName"}>Visitor: {comment.name}</label>
                                                        )}
                                                        <p className={"commentText"}>{comment.comments}</p>
                                                    </>
                                                )}

                                            </div>

                                        )

                                       }
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
