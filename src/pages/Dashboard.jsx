import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  "Affiliate Marketing",
  "Advertising Revenue",
  "E-commerce",
  "Subscription Services",
  "Online Courses/Webinars",
  "Royalties",
  "Automated Investments",
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(features[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          {features.map((feature) => (
            <TabsTrigger key={feature} value={feature}>
              {feature}
            </TabsTrigger>
          ))}
        </TabsList>
        {features.map((feature) => (
          <TabsContent key={feature} value={feature}>
            <Card>
              <CardHeader>
                <CardTitle>{feature}</CardTitle>
                <CardDescription>
                  Manage your {feature.toLowerCase()} settings and analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This is a placeholder for the {feature} feature. Detailed functionality will be implemented in future updates.
                </p>
                <Button>Configure {feature}</Button>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Placeholder for AI-powered analytics dashboard.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Income Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Placeholder for income tracking and forecasting.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Placeholder for content management system.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;