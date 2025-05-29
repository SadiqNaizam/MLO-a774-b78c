import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  Users,
  UserPlus, // Changed from User to avoid conflict with React.User, and UserPlus is more descriptive for 'Customers'
  Briefcase,
  FileText,
  ShoppingCart,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  X as IconX, // For close button on mobile
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: UserPlus, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: Briefcase, href: '#' },
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

interface SidebarProps {
  isMobileOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onClose, className }) => {
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-40 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border',
        'transition-transform duration-300 ease-in-out md:translate-x-0',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full',
        className
      )}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        <div className="flex items-center">
          <Briefcase className="h-8 w-8 text-primary mr-2" />
          <h1 className="text-xl font-semibold text-foreground">Company</h1>
        </div>
        <button onClick={onClose} className="md:hidden p-2 text-sidebar-foreground hover:text-sidebar-primary-foreground">
          <IconX className="h-6 w-6" />
        </button>
      </div>

      <ScrollArea className="flex-grow">
        <nav className="py-4">
          <ul className="space-y-1 px-3">
            {mainNavItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={onClose} // Close sidebar on mobile when a link is clicked
                  className={cn(
                    'flex items-center py-2 px-3 rounded-md text-sm font-medium',
                    item.isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
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
                onClick={onClose} // Close sidebar on mobile when a link is clicked
                className={cn(
                  'flex items-center py-2 px-3 rounded-md text-sm font-medium',
                  item.isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
