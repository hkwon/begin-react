import React, { useState, useRef, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'v@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'hkwon',
        email: 'hkwon@hotmail.com',
        active: false
    },
    {
        id: 3,
        username: 'daheek',
        email: 'daheek@gmail.com',
        active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current);
    nextId.current += 1;
  }

  const onRemove = (id) => {
    // const list = users.filter((n) => n.id !== id);
    // setUsers(list);

    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = (id) => {
    setUsers(users.map(user => user.id === id
      ? {...user, active: !user.active}
      : user));
  }

  const countActiveUsers = (users) => {
    console.log('활성 사용자 수를 세는중...');
    return (users.filter(user => user.active).length);
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate} 
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
