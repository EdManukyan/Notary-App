import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Nav from '../../components/Nav';
import { useAuthStore } from '../../store/useAuthStore';

// Define the Zod schema for form validation
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'agent@example.com',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    // In a real app, you would call supabase.auth.signInWithPassword here
    console.log('Login credentials:', data);
    
    // Simulate setting the global user state via Zustand
    setUser({ id: '123', email: data.email, role: 'agent' });
    navigate('/forgot-password'); // Based on previous navigation flow for demo
  };

  return (
    <>
      <div className="hero-panel" style={{ marginTop: '68px' }}>
        <h2>Hi there!</h2>
        <p>Sign in to manage requests, journals and verified documents.</p>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label>User name</label>
            <input 
              {...register('email')} 
              type="text" 
              className={`input ${errors.email ? 'error' : 'filled'}`} 
            />
            {errors.email && <span style={{ color: 'var(--danger)', fontSize: '12px' }}>{errors.email.message}</span>}
          </div>
          <div className="field">
            <label>Password</label>
            <input 
              {...register('password')} 
              type="password" 
              className={`input ${errors.password ? 'error' : ''}`} 
              placeholder="Password" 
            />
            {errors.password && <span style={{ color: 'var(--danger)', fontSize: '12px' }}>{errors.password.message}</span>}
          </div>
          <button type="submit" className="btn primary" style={{ width: '100%', marginTop: '24px' }}>
            Sign In
          </button>
        </form>
      </div>
      <Nav />
    </>
  );
};

export default Login;
