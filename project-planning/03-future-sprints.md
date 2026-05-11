# Future Sprints & Roadmap

## Sprint 5: The Wireless Notarization Workflow
- [ ] Build out the backend logic for submitting a new `request`.
- [ ] Enable agents to "Accept" or "Decline" documents, updating the `status` enums in the database.
- [ ] Wire up Supabase Storage buckets to actually upload and serve the scanned PDF documents.

## Sprint 6: Compliant Journals & Audit Verification
- [ ] Connect the "New Journal" form to insert records into the `journals` table.
- [ ] Verify that the PostgreSQL database triggers are successfully writing to the `audit_logs` table on every journal creation.
- [ ] Build an admin view to display the immutable audit logs.

## Sprint 7: Edge Functions & Third-Party Integrations
- [ ] **Video Calls**: Write a Supabase Edge Function to securely generate Twilio/Daily.co tokens for the `VideoVerification.tsx` screen.
- [ ] **Payments**: Integrate Stripe via Edge Functions to generate invoices and update the `fee_charged` fields when payments succeed.
- [ ] **Email Notifications**: Integrate Resend to email clients when an agent requests a new document or an invoice is due.

## Sprint 8: Production Deployment & Native Wrapping
- [ ] Push the local Supabase schema to the live Supabase Cloud project.
- [ ] Update frontend environment variables to point to the production API keys.
- [ ] Use Capacitor to build the final `.ipa` and `.apk` files for App Store submission.
