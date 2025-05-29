import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // For tab-like buttons
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

interface LeadsTrackingDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: LeadsTrackingDataPoint[] = [
  { month: 'March', closedWon: 88, closedLost: 65 },
  { month: 'April', closedWon: 60, closedLost: 42 },
  { month: 'May', closedWon: 92, closedLost: 48 },
  { month: 'June', closedWon: 70, closedLost: 10 },
  { month: 'July', closedWon: 85, closedLost: 40 },
  { month: 'August', closedWon: 32, closedLost: 95 },
];

const totalClosed = 680;
const totalLost = 70;

type ActiveTab = 'Leads came' | 'Leads Converted' | 'Total deals size';

const LeadsTrackingChart: React.FC<{ className?: string }> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<ActiveTab>('Leads Converted');

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
          <CardTitle className="text-lg font-semibold text-foreground">Leads tracking</CardTitle>
          <div className="text-sm text-muted-foreground">
            {/* This filter is from the image but not part of this component's specific build scope */}
            {/* For illustration: last 6 months */}
          </div>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
          <div>
            <span className="text-3xl font-bold text-foreground">{totalClosed}</span>
            <span className="ml-2 text-sm text-muted-foreground">total closed</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-foreground">{totalLost}</span>
            <span className="ml-2 text-sm text-muted-foreground">total lost</span>
          </div>
        </div>
        <div className="mt-4 flex space-x-1 border border-border p-0.5 rounded-md w-min">
          {(['Leads came', 'Leads Converted', 'Total deals size'] as ActiveTab[]).map((tab) => (
            <Button 
              key={tab} 
              variant={activeTab === tab ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-3 py-1 h-auto text-xs rounded-sm',
                activeTab === tab ? 'bg-secondary text-secondary-foreground shadow-sm' : 'text-muted-foreground hover:bg-transparent'
              )}
            >
              {tab}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full pt-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0D9488" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0D9488" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E74C3C" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#E74C3C" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" vertical={false}/>
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false} 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              domain={[0, 'dataMax + 10']}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderRadius: 'var(--radius)', borderColor: 'hsl(var(--border))' }}
              itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
              cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }}
            />
            <Legend 
              verticalAlign="bottom" 
              iconType="circle" 
              iconSize={8}
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
              formatter={(value) => <span className="text-muted-foreground capitalize">{value.replace('closedW', 'Closed W').replace('closedL', 'Closed L')}</span>}
            />
            <Area type="monotone" dataKey="closedWon" stroke="#0D9488" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#0D9488' }} activeDot={{ r: 6, fill: '#0D9488', stroke: 'hsl(var(--card))' }} />
            <Area type="monotone" dataKey="closedLost" stroke="#E74C3C" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#E74C3C' }} activeDot={{ r: 6, fill: '#E74C3C', stroke: 'hsl(var(--card))' }}/>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
