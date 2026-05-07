import os

base_dir = "/Users/edikmanukyan/.gemini/antigravity/scratch/notary-app/src/features"

screens = [
    # Dashboard & Settings
    ("dashboard", "Notifications", "Notifications"),
    ("dashboard", "Settings", "Settings"),
    ("dashboard", "AuthSettings", "Auth Settings"),
    
    # Wireless Request Workflow
    ("requests", "RequestList", "Wireless Requests"),
    ("requests", "RequestDetail", "Request Detail"),
    ("requests", "RejectReason", "Decline Reason"),
    ("requests", "CustomerDetail", "Customer Details"),
    
    # Customer Registration
    ("customers", "NewCustomer", "New Customer"),
    ("customers", "IDTypeSelection", "Choose ID Type"),
    ("customers", "ScanID", "Scan ID"),
    ("customers", "EditCustomerDetails", "Edit Profile"),
    
    # Journal & Document Capture
    ("documents", "NewJournal", "New Journal"),
    ("documents", "NotaryActType", "Notary Act Type"),
    ("documents", "SignatureCapture", "Signature Capture"),
    ("documents", "ScanDocuments", "Scan Documents"),
    ("documents", "ScanConfirmation", "Scan Confirmation"),
    
    # Video, Billing & Reports
    ("video", "VideoVerification", "Video Call"),
    ("billing", "FeeInfo", "Fee / Invoice"),
    ("billing", "ViewInvoice", "View Invoice"),
    ("billing", "PaymentReminder", "Payment Reminder"),
    ("billing", "PaymentAlert", "Payment Alert"),
    ("mail", "PostalMailList", "Postal Mail Queue"),
    ("mail", "AddShipmentNumber", "Add Shipment Number"),
    ("dashboard", "Reports", "Reports"),
]

template = """import {{ useNavigate }} from 'react-router-dom';
import Nav from '../../components/Nav';

const {component} = () => {{
  const navigate = useNavigate();
  return (
    <>
      <div className="topbar">
        <svg onClick={{() => navigate(-1)}} className="back-arrow" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        <span className="top-title">{title}</span>
      </div>
      <div className="content">
        <div className="card">
          <div className="card-title">{title}</div>
          <div className="card-sub">Testing Screen Mockup</div>
          <button className="btn primary" onClick={{() => navigate('/dashboard')}} style={{{{marginTop: '16px'}}}}>Back to Dashboard</button>
        </div>
      </div>
      <Nav />
    </>
  );
}};

export default {component};
"""

app_imports = []
app_routes = []

for folder, component, title in screens:
    dir_path = os.path.join(base_dir, folder)
    os.makedirs(dir_path, exist_ok=True)
    
    file_path = os.path.join(dir_path, f"{component}.tsx")
    with open(file_path, "w") as f:
        f.write(template.format(component=component, title=title))
    
    app_imports.append(f"import {component} from './features/{folder}/{component}';")
    route_path = component.lower()
    app_routes.append(f'          <Route path="/{route_path}" element={{<{component} />}} />')

# Update App.tsx
app_tsx_path = "/Users/edikmanukyan/.gemini/antigravity/scratch/notary-app/src/App.tsx"
with open(app_tsx_path, "r") as f:
    app_content = f.read()

# Only insert if not already inserted
if "import Notifications from" not in app_content:
    import_block = "\n".join(app_imports)
    app_content = app_content.replace("const queryClient", import_block + "\n\nconst queryClient")
    
    route_block = "\n".join(app_routes)
    app_content = app_content.replace("        </Routes>", route_block + "\n        </Routes>")
    
    with open(app_tsx_path, "w") as f:
        f.write(app_content)

print("Generated 24 screens and updated App.tsx")
