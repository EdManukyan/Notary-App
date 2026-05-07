import Nav from '../../components/Nav';

const Search = () => {
  return (
    <>
      <div className="topbar">
        <span className="top-title">Search</span>
      </div>
      <div className="content">
        <div className="field">
          <input type="text" className="input" placeholder="Search records..." />
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Search;
