import React from 'react';

export const LoginForm = ({ onSubmit, changeUsername, changePassword }) => (
  <form onSubmit={ onSubmit }>
    <label>
      Username
	   <input placeholder="Username" onChange={changeUsername} required />
    </label>
    <label>
      Password
	  <input placeholder="Password" onChange={changePassword} type="password" required/>
    </label>
	  <button type="submit">Sign in</button>
	</form>
);

