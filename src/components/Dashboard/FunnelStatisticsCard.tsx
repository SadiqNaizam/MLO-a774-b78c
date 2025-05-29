import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Circle } from 'lucide-react';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  time: string;
  color: string; // Tailwind background color class e.g., 'bg-red-500'
  progress: number; // Percentage for progress bar segment
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, time: '2 days', color: 'bg-rose-500', progress: 33.33 },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, time: '2 days', color: 'bg-amber-400', progress: 16.67 },
  { id: 'inConversation', name: 'In conversation', count: 50, value: 100, time: 'average time on this stage', color: 'bg-slate-600', progress: 8.33 },
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, time: '8 days', color: 'bg-emerald-500', progress: 3.33 },
  { id: 'closedWon', name: 'Closed won', count: 20, value: 50, time: '10 days', color: 'bg-violet-500', progress: 3.33 },
];
// Total active leads is sum of all counts for this simplified example, or a specific value.
// Image shows 600 active leads, but individual stages sum to 390. Let's use the 600 from image.
const totalActiveLeads = 600;

const FunnelStatisticsCard: React.FC<{ className?: string }> = ({ className }) => {
  const totalProgressValue = funnelData.reduce((sum, stage) => sum + stage.progress, 0);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold text-foreground">{totalActiveLeads}</span>
          <span className="ml-2 text-sm text-muted-foreground">active leads</span>
        </div>
        
        <div className="w-full h-3 mb-6 flex rounded overflow-hidden">
          {funnelData.map(stage => (
            <div 
              key={stage.id} 
              className={cn(stage.color)}
              style={{ width: `${(stage.count / totalActiveLeads) * 100}%` }} // Width based on count relative to total for visual representation
            />
          ))}
        </div>

        <ul className="space-y-3">
          {funnelData.map((stage) => (
            <li key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-3 text-sm">
              <Circle className={cn("h-3 w-3", stage.color.replace('bg-', 'text-'))} fill={stage.color.startsWith('bg-') ? `var(--${stage.color.split('-')[1]}-${stage.color.split('-')[2]})` : 'currentColor'} />
              <span className="text-foreground truncate">{stage.name}</span>
              <span className="text-muted-foreground justify-self-end">{stage.count}</span>
              <span className="text-muted-foreground justify-self-end">${stage.value}</span>
              {stage.name === 'In conversation' ? (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-muted-foreground justify-self-end cursor-default bg-gray-700 text-white px-2 py-0.5 rounded text-xs">{stage.time}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Average time spent by leads in this stage.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span className="text-muted-foreground justify-self-end">{stage.time}</span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelStatisticsCard;
