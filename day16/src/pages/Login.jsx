import React,{useRef} from 'react'
export default function Login() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        // console.log('Username:', username);
        // console.log('Password:', password);
        //local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        // session storage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
    };
    //delete account
    const handleDelete = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        alert('Account deleted successfully');
    };
  return (
    <div>
       <section id='login'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" ref={usernameRef} /><br />
                    <input type="password" placeholder="Password" ref={passwordRef} /><br />
                    <button type="submit">Login</button>
                </form>
                <button onClick={handleDelete}>delete account</button>
            </section>
    </div>
  )
}
