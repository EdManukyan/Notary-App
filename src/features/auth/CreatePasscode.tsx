import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';

const CreatePasscode = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="topbar">
        <span className="back" onClick={() => navigate('/forgot-password')}>&lt;</span>
        <span className="top-title">Create Passcode</span>
      </div>
      <div className="content" style={{ paddingTop: '56px' }}>
        <div className="field">
          <label>Passcode</label>
          <div className="input focus" style={{ letterSpacing: '4px' }}>0  0  0  0</div>
        </div>
        <div className="btn primary" onClick={() => navigate('/fingerprint')}>Create passcode</div>
        <div className="btn secondary">Use another method</div>
      </div>
      <Nav />
    </>
  );
};

export default CreatePasscode;
