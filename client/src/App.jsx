import { UserProvider } from './context/UserContext';
import Routes from './routes';

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default App;
