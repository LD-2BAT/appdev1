import './App.css'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

function App() {

  return (
  <>
  <MyButton/>
  </>
  )
} 

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


export default App
