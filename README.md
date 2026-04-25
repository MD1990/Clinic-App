# Clinic Ops Sandbox

Minimal Clinic appointment manager (MVP) — a lightweight app to track appointments, simulate reminders, and manage confirmation workflows.

Run locally

1. Clone

   git clone https://github.com/MD1990/Clinic-App.git
   cd Clinic-App

2. Install

   npm install

3. Run

   npm run dev

4. Open http://localhost:3000

What you'll find

- Appointments table with add/edit/delete
- One-click "Send Reminder" that marks reminder sent and shows a simulated message
- Manual response entry (YES / NO / RESCHEDULE) which updates status
- Dashboard summary for today's appointments

Notes

- Data is stored in `data/appointments.json` for a simple zero-dependency MVP.
- This is intentionally minimal and designed to be used like a better Google Sheet.
