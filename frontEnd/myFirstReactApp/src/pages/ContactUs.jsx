import { IoMdContact } from "react-icons/io";
import { useState } from "react";

function ContactUs() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("userName :", userName);
        console.log("Email :", email);
        console.log("password :", password);
        console.log("Confirm Pass :", confirmPass);
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
                    <h1 className="text-center text-info">Welcome To Our Website</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            name="userName"
                            className="form-control"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <br />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactUs;