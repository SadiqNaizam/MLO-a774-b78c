import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';

interface HeaderProps {
  pageTitle: string;
  onMenuToggle: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle, onMenuToggle, className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 right-0 h-16 bg-card border-b z-20',
        'flex items-center justify-between px-6',
        'left-0 md:left-64',
        className
      )}
    >
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onMenuToggle} className="md:hidden mr-2">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground">{pageTitle}</h1>
      </div>
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">
              Create
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Contact</DropdownMenuItem>
            <DropdownMenuItem>New Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Placeholder for User Profile Dropdown if needed */}
        {/* <UserCircle className="h-8 w-8 ml-4 text-muted-foreground cursor-pointer" /> */}
      </div>
    </header>
  );
};

export default Header;
