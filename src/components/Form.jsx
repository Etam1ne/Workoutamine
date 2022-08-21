import { useState } from "react";

const Form = ({title, handleSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
  
    return (
      <form onSubmit={(e) => {
        e.preventDefault(); 
        handleSubmit(email, password, username);
      }}>

        {title === "sign up" ? 
          <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="name"
          />
        : null}

        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input type="submit" value={title} />
      </form>
    );
  }
  
export {Form};