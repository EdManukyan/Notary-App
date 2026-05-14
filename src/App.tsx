import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { supabase } from './services/supabase';
import { useAuthStore } from './store/useAuthStore';

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

import Notifications from './features/dashboard/Notifications';
import Settings from './features/dashboard/Settings';
import AuthSettings from './features/dashboard/AuthSettings';
import RequestList from './features/requests/RequestList';
import RequestDetail from './features/requests/RequestDetail';
import RejectReason from './features/requests/RejectReason';
import CustomerDetail from './features/requests/CustomerDetail';
import NewCustomer from './features/customers/NewCustomer';
import IDTypeSelection from './features/customers/IDTypeSelection';
import ScanID from './features/customers/ScanID';
import EditCustomerDetails from './features/customers/EditCustomerDetails';
import NewJournal from './features/documents/NewJournal';
import NotaryActType from './features/documents/NotaryActType';
import SignatureCapture from './features/documents/SignatureCapture';
import ScanDocuments from './features/documents/ScanDocuments';
import ScanConfirmation from './features/documents/ScanConfirmation';
import VideoVerification from './features/video/VideoVerification';
import FeeInfo from './features/billing/FeeInfo';
import ViewInvoice from './features/billing/ViewInvoice';
import PaymentReminder from './features/billing/PaymentReminder';
import PaymentAlert from './features/billing/PaymentAlert';
import PostalMailList from './features/mail/PostalMailList';
import AddShipmentNumber from './features/mail/AddShipmentNumber';
import Reports from './features/dashboard/Reports';

const queryClient = new QueryClient();

function App() {
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [setSession]);

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
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/authsettings" element={<AuthSettings />} />
          <Route path="/requestlist" element={<RequestList />} />
          <Route path="/requestdetail" element={<RequestDetail />} />
          <Route path="/rejectreason" element={<RejectReason />} />
          <Route path="/customerdetail" element={<CustomerDetail />} />
          <Route path="/newcustomer" element={<NewCustomer />} />
          <Route path="/idtypeselection" element={<IDTypeSelection />} />
          <Route path="/scanid" element={<ScanID />} />
          <Route path="/editcustomerdetails" element={<EditCustomerDetails />} />
          <Route path="/newjournal" element={<NewJournal />} />
          <Route path="/notaryacttype" element={<NotaryActType />} />
          <Route path="/signaturecapture" element={<SignatureCapture />} />
          <Route path="/scandocuments" element={<ScanDocuments />} />
          <Route path="/scanconfirmation" element={<ScanConfirmation />} />
          <Route path="/videoverification" element={<VideoVerification />} />
          <Route path="/feeinfo" element={<FeeInfo />} />
          <Route path="/viewinvoice" element={<ViewInvoice />} />
          <Route path="/paymentreminder" element={<PaymentReminder />} />
          <Route path="/paymentalert" element={<PaymentAlert />} />
          <Route path="/postalmaillist" element={<PostalMailList />} />
          <Route path="/addshipmentnumber" element={<AddShipmentNumber />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
