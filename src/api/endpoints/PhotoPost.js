import React from 'react';

const PhotoPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password
      }),
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
      return json;
    })
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" value={username} placeholder="username" onChange={({target}) => setUsername(target.value)} />
    <input type="text" value={password} placeholder="password" onChange={({target}) => setPassword(target.value)} />
    <input type="text" value={email} placeholder="email" onChange={({target}) => setEmail(target.value)} />
    <button>Enviar</button>
  </form>
};

export default PhotoPost;