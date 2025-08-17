// app/admin/layout.tsx
import Sidebar from '@/components/Sidebar'

export default function AdminLayout({children}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar (persistent) */}
      <aside className="w-64 bg-gray-900 text-white">
        <Sidebar />
      </aside>

      {/* Main content area (changes when route changes) */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
