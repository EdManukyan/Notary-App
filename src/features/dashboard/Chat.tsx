import Nav from '../../components/Nav';

const Chat = () => {
  return (
    <>
      <div className="topbar">
        <span className="top-title">Chats</span>
      </div>
      <div className="content">
        <div className="card">
          <div className="card-title">Customer Name</div>
          <div className="card-sub">Hey, can you verify my document?</div>
          <div className="pill">New</div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Chat;
