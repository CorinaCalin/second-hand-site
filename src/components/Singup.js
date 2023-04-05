import React,{useState} from "react"
export const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Signup = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(name, email, password);
    }

    return(
        <div className="container">
            <br/>
            <h2>SIGN UP</h2>
            <hr/>
                <form autoComplete="off" className="form-group" onSubmit={Signup}>
                    <label htmlFor="Name">Name</label><br/>
                    <input type="text" className="form-control" required
                        onChange={(e)=>setName(e.target.value)} value={name}/><br/>

                    <label htmlFor="Email">Email</label><br/>
                    <input type="email" className="form-control" required
                        onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
                        

                    <label htmlFor="Password">Password</label><br/>
                    <input type="password" className="form-control" required
                        onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>

                    <button type="submit" className="btn btn-success btn-md mybtn">REGISTER</button>
                </form>
                {error && <div className="error-msg">{error}</div>}  
        </div>
    )
}