import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="topbar">
        <span className="back" onClick={() => navigate('/')}>&lt;</span>
        <span className="top-title">Choose account</span>
      </div>
      <div className="content" style={{ paddingTop: '120px' }}>
        <div className="btn blue" onClick={() => navigate('/login')}>Agent</div>
        <div className="btn primary">Customer</div>
      </div>
      <Nav />
    </>
  );
};

export default RoleSelection;
