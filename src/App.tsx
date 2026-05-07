import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Splash from './features/auth/Splash';
import RoleSelection from './features/auth/RoleSelection';
import Login from './features/auth/Login';
import ForgotPassword from './features/auth/ForgotPassword';
import CreatePasscode from './features/auth/CreatePasscode';
import Fingerprint from './features/auth/Fingerprint';
import Activation from './features/auth/Activation';
import Dashboard from './features/dashboard/Dashboard';
import Search from './features/dashboard/Search';
import Docs from './features/documents/Docs';
import Chat from './features/dashboard/Chat';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-passcode" element={<CreatePasscode />} />
          <Route path="/fingerprint" element={<Fingerprint />} />
          <Route path="/activation" element={<Activation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
