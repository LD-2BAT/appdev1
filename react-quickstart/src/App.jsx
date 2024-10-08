import './App.css'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

function App() {

  return (
  <>
<DiwataPares/>
  </>
  )
} 

function DiwataPares() {
  let content;
  let isLoggedIn=false;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  
  return (
    <div>
      {content}
    </div>
  );
  
}

export default App
