import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';

const Fingerprint = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="topbar">
        <span className="back" onClick={() => navigate('/create-passcode')}>&lt;</span>
        <span className="top-title">Fingerprint Setup</span>
      </div>
      <div className="content">
        <div className="bio">Fingerprint</div>
        <div className="notice">Set up secure biometric authentication for this device.</div>
        <div className="btn primary" onClick={() => navigate('/activation')}>Set up</div>
      </div>
      <Nav />
    </>
  );
};

export default Fingerprint;
