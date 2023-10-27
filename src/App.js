import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <h1>
        Example heading
        <p bg="secondary" as={Button}>
          New
        </p>
      </h1>
    </div>
  );
}

export default App;
