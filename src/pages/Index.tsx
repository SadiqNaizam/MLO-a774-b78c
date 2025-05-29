import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import FunnelStatisticsCard from '@/components/Dashboard/FunnelStatisticsCard';
import SourcePieChart from '@/components/Dashboard/SourcePieChart';
import LeadsTrackingChart from '@/components/Dashboard/LeadsTrackingChart';
import DetailStatsGrid from '@/components/Dashboard/DetailStatsGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LeadsDashboardPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle="Dashboard">
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="mt-4">
          {/* Placeholder content for Sales tab */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
            <p className="text-muted-foreground">
              Detailed sales statistics, performance charts, and revenue tracking would be displayed here.
              This section is currently a placeholder.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="leads" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FunnelStatisticsCard />
            <SourcePieChart />
            <LeadsTrackingChart className="md:col-span-2" />
            <DetailStatsGrid className="md:col-span-2" />
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default LeadsDashboardPage;
