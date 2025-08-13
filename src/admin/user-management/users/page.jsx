"use client";

import DataTable from '@/components/ui/data-table.jsx'
import { columns } from "./columns";

const demoUsers = [
  { name: "tariq iqbal farooqui", email: "tariq@example.com", role: "admin",  status: "active" },
  { name: "mohd ruman", email: "ruman@example.com",  role: "editor", status: "inactive" },
  { name: "fatima shaikh", email: "fatima@example.com", role: "viewer", status: "active" },
  { name: "aisha khan", email: "aisha@example.com",  role: "editor", status: "active" },
  { name: "arjun singh", email: "arjun@example.com",  role: "viewer", status: "inactive" },
  { name: "tariq iqbal farooqui", email: "tariq@example.com", role: "admin",  status: "active" },
  { name: "mohd ruman", email: "ruman@example.com",  role: "editor", status: "inactive" },
  { name: "fatima shaikh", email: "fatima@example.com", role: "viewer", status: "active" },
  { name: "aisha khan", email: "aisha@example.com",  role: "editor", status: "active" },
  { name: "arjun singh", email: "arjun@example.com",  role: "viewer", status: "inactive" },
  { name: "tariq iqbal farooqui", email: "tariq@example.com", role: "admin",  status: "active" },
  { name: "mohd ruman", email: "ruman@example.com",  role: "editor", status: "inactive" },
  { name: "fatima shaikh", email: "fatima@example.com", role: "viewer", status: "active" },
  { name: "aisha khan", email: "aisha@example.com",  role: "editor", status: "active" },
  { name: "arjun singh", email: "arjun@example.com",  role: "viewer", status: "inactive" },
  { name: "tariq iqbal farooqui", email: "tariq@example.com", role: "admin",  status: "active" },
  { name: "mohd ruman", email: "ruman@example.com",  role: "editor", status: "inactive" },
  { name: "fatima shaikh", email: "fatima@example.com", role: "viewer", status: "active" },
  { name: "aisha khan", email: "aisha@example.com",  role: "editor", status: "active" },
  { name: "arjun singh", email: "arjun@example.com",  role: "viewer", status: "inactive" },
  { name: "tariq iqbal farooqui", email: "tariq@example.com", role: "admin",  status: "active" },
  { name: "mohd ruman", email: "rummi@example.com",  role: "editor", status: "inactive" },
  { name: "fatima shaikh", email: "fatima@example.com", role: "viewer", status: "active" },
  { name: "aisha khan", email: "aisha@example.com",  role: "editor", status: "active" },
  { name: "arjun singh", email: "arjun@example.com",  role: "viewer", status: "inactive" },
];

export default function UsersPage() {
  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Users</h1>
        <p className="text-sm text-muted-foreground">
          Basic user management table with search, sort, and pagination.
        </p>
      </div>

      <DataTable columns={columns} data={demoUsers} />
    </div>
  );
}
