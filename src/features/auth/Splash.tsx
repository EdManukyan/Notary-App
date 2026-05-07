import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('root')?.classList.add('dark-theme');
    return () => {
      document.getElementById('root')?.classList.remove('dark-theme');
    };
  }, []);

  return (
    <>
      <div style={{ paddingTop: '16px', paddingLeft: '24px', fontSize: '13px', fontWeight: 800 }}>
        9:41
      </div>
      <div style={{ padding: '278px 24px', textAlign: 'center' }} onClick={() => navigate('/role')}>
        <h2 style={{ fontSize: '36px', margin: '0 0 12px', fontWeight: 800 }}>Notary Agent</h2>
        <p style={{ color: '#d8d2ef', fontWeight: 700 }}>Premium mobile notarization</p>
      </div>
      <Nav />
    </>
  );
};

export default Splash;
