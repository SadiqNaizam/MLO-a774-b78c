import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  Users,
  User,
  FileText,
  ShoppingCart,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Briefcase // Placeholder for company logo/name
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  isCategory?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: User, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: Briefcase, href: '#' }, // Used Briefcase as per image example
  { id: 'invoices', label: 'Invoices', icon: FileText, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingCart, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#' },
];

const secondaryNavItems: NavItem[] = [
  { id: 'help', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border">
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        {/* Placeholder for Logo */} 
        <Briefcase className="h-8 w-8 text-primary mr-2" /> 
        <h1 className="text-xl font-semibold text-foreground">Company</h1>
      </div>

      <ScrollArea className="flex-grow">
        <nav className="py-4">
          <ul className="space-y-1 px-3">
            {mainNavItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center py-2 px-3 rounded-md text-sm font-medium',
                    item.isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>

      <div className="py-4 border-t border-sidebar-border">
        <ul className="space-y-1 px-3">
          {secondaryNavItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center py-2 px-3 rounded-md text-sm font-medium',
                  item.isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarNav;
