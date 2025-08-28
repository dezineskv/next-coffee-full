import { SidebarProvider, SidebarTrigger } from '@/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Provider } from '../provider';
import { Toaster } from '@/ui/sonner';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-slate-200">
        <SidebarTrigger />
      </main>
      <Provider>
        <body>
          {children}
          <Toaster />
        </body>
      </Provider>
    </SidebarProvider>
  );
}
