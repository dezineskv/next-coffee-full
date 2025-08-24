import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/app/components/AppSidebar';
import { Provider } from '../provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
      <Provider>
        <body>{children}</body>
      </Provider>
    </SidebarProvider>
  );
}
