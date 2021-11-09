import './App.css';
import {AuthProvider} from '../Auth/AuthProvider';
import {Navigate, Route, Routes} from 'react-router-dom';
import RequireAuth from '../Auth/RequireAuth';
import LoginPage from '../LoginPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/clipboard" />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route
            path="/clipboard"
            element={
              <RequireAuth>
                <div>Clipboard</div>
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
