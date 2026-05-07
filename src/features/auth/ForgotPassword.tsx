import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="topbar">
        <span className="back" onClick={() => navigate('/login')}>&lt;</span>
        <span className="top-title">Forgot Password</span>
      </div>
      <div className="content" style={{ paddingTop: '56px' }}>
        <div className="field">
          <label>Email Address</label>
          <input type="text" className="input focus" defaultValue="agent@example.com" />
        </div>
        <div className="btn primary" onClick={() => navigate('/create-passcode')}>Send reset link</div>
        <div className="btn secondary">Use another method</div>
      </div>
      <Nav />
    </>
  );
};

export default ForgotPassword;
