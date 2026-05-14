import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Nav from '../../components/Nav';
import { supabase } from '../../services/supabase';
import { useAuthStore } from '../../store/useAuthStore';

const Dashboard = () => {
  const navigate = useNavigate();
  const session = useAuthStore((state) => state.session);

  useEffect(() => {
    if (!session) {
      navigate('/login');
    }
  }, [session, navigate]);

  const { data: requestCount } = useQuery({
    queryKey: ['requestsCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('requests')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
    enabled: !!session,
  });

  const { data: journalCount } = useQuery({
    queryKey: ['journalsCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('journals')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
    enabled: !!session,
  });

  if (!session) return null;

  return (
    <>
      <div className="topbar">
        <span className="back">&lt;</span>
        <span className="top-title">Home</span>
      </div>
      <div className="content">
        <div className="hero-panel" style={{ margin: '0 0 18px' }}>
          <h2>Today</h2>
          <p>{requestCount} requests in progress, {journalCount} journals created.</p>
        </div>
        <div className="card blue" onClick={() => navigate('/requestlist')}>
          <div className="card-title">Wireless Requests</div>
          <div className="card-sub">Total requests</div>
          <div className="pill">{requestCount ?? 0}</div>
        </div>
        <div className="card orange" onClick={() => navigate('/newjournal')}>
          <div className="card-title">Today Journals</div>
          <div className="card-sub">Journals created today</div>
          <div className="pill">{journalCount ?? 0}</div>
        </div>
        <div className="card" onClick={() => navigate('/chat')}>
          <div className="card-title">Chat</div>
          <div className="card-sub">Active conversations</div>
          <div className="pill">0</div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Dashboard;
