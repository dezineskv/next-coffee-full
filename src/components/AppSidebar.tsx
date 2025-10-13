import {
  Coffee,
  Home,
  Calendar,
  LogIn,
  ShoppingBasket,
  Edit,
  ChartArea,
  Database,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';

// Menu items.
const items = [
  {
    title: 'Admin',
    url: '/admin',
    icon: Home,
  },
  {
    title: 'Login',
    url: '/login',
    icon: LogIn,
  },
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: ChartArea,
  },
  {
    title: 'Add Products',
    url: '/admin/all-products',
    icon: Coffee,
  },
  {
    title: 'Edit Products',
    url: '/admin/products',
    icon: Edit,
  },
  {
    title: 'Client Home',
    url: '/',
    icon: ShoppingBasket,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <>
                <Link href="/">
                  <Image
                    src="https://i.ibb.co/XrBqjX0k/logo3-d.png"
                    alt="Logo"
                    width={220}
                    height={180}
                    className="px-auto mx-auto w-auto max-w-[220px] border-0 pb-4"
                  />
                </Link>
              </>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
