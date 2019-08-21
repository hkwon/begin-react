# Velopert reactjs 강의를 보면서 따라한 코딩

## 소스코드
```javascript
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
      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle} 
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
```

## 주요내용
- useState를 이용하여 rendering 할 객체의 내용을 변경한다.
- useRef를 이용하여 특정 DOM 을 handling 할 수 있다.
- useMemo는 여기서 지정한 객체의 내용이 변화될 때만 수행된다. (최적화를 위해 필요)

## 느낀점과 얻은것들
- React.js 는 HTML과 CSS를 마치 js 로 작성하는 듯 하게 만든다.
- 어짜피 DOM 또한 js object 이니까 너무나 자연스럽게 물 흐르듯 작성이 된다.
- props로 parameter를 전달한다.
- 이때, 미리 { username, email, id, active } 등과 같이 비구조화 할당을 하여 사용한다.
- onCreate 는 spread 연산자를 사용하여, useState의 두번째 함수를 호출한다.
- onRemove 는 filter를 이용한다.
- onToggle 은 map을 이용한다.
- 항상 기존 객체를 copy하여 새로운 객체를 만들어서 rendering 하게 한다.
- rendering의 효율성을 위해 key를 등록한다.
- 또한 useRef를 이용하여 내부 정보를 저장하여 사용할 수 있다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
