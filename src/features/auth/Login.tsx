import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Nav from '../../components/Nav';
import { supabase } from '../../services/supabase';

// Define the Zod schema for form validation
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSignIn = async (data: LoginFormValues) => {
    setLoading(true);
    setErrorMsg(null);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    setLoading(false);
    
    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate('/dashboard');
    }
  };

  const onSignUp = async (data: LoginFormValues) => {
    setLoading(true);
    setErrorMsg(null);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    setLoading(false);
    
    if (error) {
      setErrorMsg(error.message);
    } else {
      alert('Success! Please check your email to verify your account.');
    }
  };

  return (
    <>
      <div className="hero-panel" style={{ marginTop: '68px' }}>
        <h2>Hi there!</h2>
        <p>Sign in to manage requests, journals and verified documents.</p>
      </div>
      <div className="content">
        {errorMsg && (
          <div style={{ backgroundColor: 'var(--danger)', color: 'white', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
            {errorMsg}
          </div>
        )}
        <form>
          <div className="field">
            <label>Email address</label>
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
          <button 
            type="button" 
            onClick={handleSubmit(onSignIn)}
            className="btn primary" 
            style={{ width: '100%', marginTop: '24px' }}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Sign In'}
          </button>
          
          <button 
            type="button" 
            onClick={handleSubmit(onSignUp)}
            className="btn outline" 
            style={{ width: '100%', marginTop: '12px' }}
            disabled={loading}
          >
            Create New Account
          </button>
        </form>
      </div>
      <Nav />
    </>
  );
};

export default Login;
