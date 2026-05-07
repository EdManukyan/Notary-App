import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';

const Activation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="topbar">
        <span className="back" onClick={() => navigate('/login')}>&lt;</span>
        <span className="top-title">Account Activation</span>
      </div>
      <div className="content" style={{ paddingTop: '56px' }}>
        <div className="field">
          <label>Activation Code</label>
          <div className="input focus" style={{ letterSpacing: '4px' }}>0  0  0  0</div>
        </div>
        <div className="btn primary" onClick={() => navigate('/dashboard')}>Activate</div>
        <div className="btn secondary">Use another method</div>
      </div>
      <Nav />
    </>
  );
};

export default Activation;
