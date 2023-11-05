import { useEffect, useState } from 'react';
import './App.css';
import TextButton from './components/TextButton';
import fahrenheitToCelsius from './helpers/fahrenheitToCelsius';
import celsiusToFahrenheit from './helpers/celsiusToFahrenheit';

type PostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const [temp, setTemp] = useState(90);
  const [unit, setUnit] = useState('F');
  const [posts, setPosts] = useState<PostsType[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => res.json())
      .then((res: PostsType[]) => setPosts(res));
  }, []);

  const toggleTemp = () => {
    if (unit === 'F') {
      setUnit('C');
      setTemp(fahrenheitToCelsius(temp));
    } else {
      setUnit('F');
      setTemp(celsiusToFahrenheit(temp));
    }
  };
  console.log('POSTS', posts);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {temp}
          <sup>°</sup>
          <span data-testid="tempUnit">{unit}</span>
        </h1>

        <p>Temperature converter</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <TextButton handleClick={toggleTemp}>Toggle Temperature</TextButton>
        </div>
        {posts.map(post => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
