import { useUserContext } from './store/UserContext';
import { AppContextProvider } from './store';

import './App.css';
import { usePostContext } from './store/PostContext';

function App() {
  const { user, login } = useUserContext();
  const { getById } = usePostContext();

  const textPost = getById('123');

  const handleClick = () => {
    login('admin', '123');
  };

  return (
    <div className="App">
      <h1>Testing: Combine Context</h1>
      <a
        href="https://medium.com/front-end-weekly/how-to-combine-context-providers-for-cleaner-react-code-9ed24f20225e"
        target="_blank"
      >
        Combine Context
      </a>
      <p>User: {user?.username}</p>
      <hr />
      <p>{JSON.stringify(textPost, null, 2)}</p>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default App;
