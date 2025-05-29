import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ReasonLost {
  id: string;
  percentage: number;
  reason: string;
}

const reasonsLostData: ReasonLost[] = [
  { id: 'reason1', percentage: 40, reason: 'The proposal is unclear' },
  { id: 'reason2', percentage: 20, reason: 'However venture pursuit' },
  { id: 'reason3', percentage: 10, reason: 'Other' },
  { id: 'reason4', percentage: 30, reason: 'The proposal is unclear' }, // Duplicated reason from image
];

interface OtherStat {
  id: string;
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const otherDataStats: OtherStat[] = [
  { id: 'stat1', value: '900', label: 'total leads count' },
  { id: 'stat2', value: '12', label: 'days in average to convert lead' },
  { id: 'stat3', value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads that have not been interacted with in the last 30 days.' },
];

const DetailStatsGrid: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-6 gap-y-8">
          {reasonsLostData.map((item) => (
            <div key={item.id}>
              <p className="text-3xl font-bold text-foreground">{item.percentage}%</p>
              <p className="text-sm text-muted-foreground">{item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherDataStats.map((stat) => (
            <div key={stat.id}>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {stat.hasInfo && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-1 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stat.infoText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailStatsGrid;
