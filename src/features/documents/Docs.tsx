import Nav from '../../components/Nav';

const Docs = () => {
  return (
    <>
      <div className="topbar">
        <span className="top-title">Documents</span>
      </div>
      <div className="content">
        <div className="hero-panel" style={{ margin: '0 0 18px' }}>
          <h2>My Docs</h2>
          <p>Access your journals and scanned documents.</p>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Docs;
