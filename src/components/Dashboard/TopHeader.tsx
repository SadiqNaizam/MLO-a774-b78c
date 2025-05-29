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

interface TopHeaderProps {
  onMenuToggle?: () => void;
  pageTitle?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ 
  onMenuToggle,
  pageTitle = 'Dashboard'
}) => {
  return (
    <header className="h-16 fixed top-0 left-0 md:left-64 right-0 flex items-center justify-between px-6 bg-card border-b z-10">
      <div className="flex items-center">
        {onMenuToggle && (
          <Button variant="ghost" size="icon" onClick={onMenuToggle} className="md:hidden mr-2">
            <Menu className="h-6 w-6" />
          </Button>
        )}
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
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Contact</DropdownMenuItem>
            <DropdownMenuItem>New Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
