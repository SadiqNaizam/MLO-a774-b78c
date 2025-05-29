import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const pieChartData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#E74C3C' }, // chartColors.2
  { name: 'Behance', value: 1000, percentage: 40, color: '#FFCE56' }, // chartColors.1
  { name: 'Instagram', value: 1000, percentage: 10, color: '#3498DB' }, // chartColors.3
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#5DADE2' }, // chartColors.4. Typo in image (10% twice, sum > 100). Adjusted to sum to 100%
];
// Adjust percentages to sum to 100
const totalValue = pieChartData.reduce((sum, item) => sum + item.value, 0);
const adjustedPieChartData = pieChartData.map(item => ({ ...item, percentage: parseFloat(((item.value / totalValue) * 100).toFixed(0)) }));


const SourcePieChart: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-foreground">Sources</CardTitle>
          {/* Placeholder for filter if needed, not in scope */}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="h-52 md:h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={adjustedPieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  innerRadius={50} // For donut chart
                  fill="#8884d8"
                  dataKey="value"
                  stroke="hsl(var(--card))" // Border color same as card background for segments
                  strokeWidth={2}
                >
                  {adjustedPieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderRadius: 'var(--radius)', borderColor: 'hsl(var(--border))' }}
                  itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 text-sm">
            {adjustedPieChartData.map((source) => (
              <div key={source.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span style={{ backgroundColor: source.color }} className="h-3 w-3 rounded-sm mr-2"></span>
                  <span className="text-foreground">{source.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-foreground font-medium mr-2">${source.value.toLocaleString()}</span>
                  <span className="text-muted-foreground">{source.percentage}%</span>
                </div>
              </div>
            ))}
             <div className="text-xs text-muted-foreground pt-2 text-right">
              from leads total
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcePieChart;
