import Nav from '../../components/Nav';

const Dashboard = () => {
  return (
    <>
      <div className="topbar">
        <span className="back">&lt;</span>
        <span className="top-title">Home</span>
      </div>
      <div className="content">
        <div className="hero-panel" style={{ margin: '0 0 18px' }}>
          <h2>Today</h2>
          <p>19 requests in progress, 17 journals created.</p>
        </div>
        <div className="card blue">
          <div className="card-title">Wireless Requests</div>
          <div className="card-sub">2 new / 21 total</div>
          <div className="pill">21</div>
        </div>
        <div className="card orange">
          <div className="card-title">Today Journals</div>
          <div className="card-sub">17 journals created today</div>
          <div className="pill">17</div>
        </div>
        <div className="card">
          <div className="card-title">Chat</div>
          <div className="card-sub">2 new active conversations</div>
          <div className="pill">02</div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Dashboard;
