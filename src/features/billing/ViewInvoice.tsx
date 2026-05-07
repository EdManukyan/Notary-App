import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';

const ViewInvoice = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="topbar">
        <svg onClick={() => navigate(-1)} className="back-arrow" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        <span className="top-title">View Invoice</span>
      </div>
      <div className="content">
        <div className="card">
          <div className="card-title">View Invoice</div>
          <div className="card-sub">Testing Screen Mockup</div>
          <button className="btn primary" onClick={() => navigate('/dashboard')} style={{marginTop: '16px'}}>Back to Dashboard</button>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default ViewInvoice;
