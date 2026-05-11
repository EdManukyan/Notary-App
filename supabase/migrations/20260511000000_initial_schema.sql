-- 1. Profiles (Agents)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  commission_number TEXT,
  biometric_enabled BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Customers
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID REFERENCES profiles(id) NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  id_type TEXT CHECK (id_type IN ('Passport', 'Driving License')),
  id_verification_status TEXT DEFAULT 'Pending' CHECK (id_verification_status IN ('Pending', 'Verified', 'Rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Requests (Wireless Workflow)
CREATE TABLE requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id) NOT NULL,
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Review', 'Accepted', 'Declined')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Documents
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID REFERENCES requests(id) NOT NULL,
  file_url TEXT NOT NULL,
  document_type TEXT NOT NULL,
  status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Signed', 'Rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Journals
CREATE TABLE journals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id) NOT NULL,
  notary_act_type TEXT NOT NULL,
  location TEXT NOT NULL,
  fee_charged DECIMAL NOT NULL DEFAULT 0.0,
  signature_url TEXT,
  video_recording_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Audit Logs
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID REFERENCES profiles(id) NOT NULL,
  action TEXT NOT NULL,
  resource TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE journals ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Security Policies (Agents can only access their own data)
CREATE POLICY "Agents can view their own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Agents can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Agents can view their own customers" ON customers FOR SELECT USING (auth.uid() = agent_id);
CREATE POLICY "Agents can insert their own customers" ON customers FOR INSERT WITH CHECK (auth.uid() = agent_id);
CREATE POLICY "Agents can update their own customers" ON customers FOR UPDATE USING (auth.uid() = agent_id);

-- Immutable Audit Logging Triggers
CREATE OR REPLACE FUNCTION log_journal_creation() RETURNS trigger AS $$
BEGIN
  -- Insert a record into the audit log using the authenticated user's ID
  INSERT INTO audit_logs (agent_id, action, resource)
  VALUES (auth.uid(), 'CREATE_JOURNAL', 'Journal:' || NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_journal_created
  AFTER INSERT ON journals
  FOR EACH ROW EXECUTE PROCEDURE log_journal_creation();
