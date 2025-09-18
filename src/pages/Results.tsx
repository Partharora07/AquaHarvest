import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Droplets, Home, IndianRupee } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

interface UserData {
  name: string;
  location: string;
  rooftopArea: string;
  openSpace: string;
  residents: string;
}

const Results = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("aquaHarvestData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      navigate("/input");
    }
  }, [navigate]);

  if (!userData) return null;

  // Dummy data based on user inputs
  const rooftopArea = parseInt(userData.rooftopArea) || 100;
  const estimatedHarvest = Math.round(rooftopArea * 800); // 800 litres per sq.m per year
  
  const barData = [
    { name: 'Your Rooftop', area: rooftopArea, harvest: estimatedHarvest }
  ];

  const rainfallData = [
    { month: 'Jan', rainfall: 5 },
    { month: 'Feb', rainfall: 3 },
    { month: 'Mar', rainfall: 8 },
    { month: 'Apr', rainfall: 15 },
    { month: 'May', rainfall: 25 },
    { month: 'Jun', rainfall: 45 },
    { month: 'Jul', rainfall: 65 },
    { month: 'Aug', rainfall: 55 },
    { month: 'Sep', rainfall: 35 },
    { month: 'Oct', rainfall: 18 },
    { month: 'Nov', rainfall: 8 },
    { month: 'Dec', rainfall: 2 },
  ];

  const costData = [
    { name: 'Construction', value: 70, color: 'hsl(var(--primary))' },
    { name: 'Maintenance', value: 10, color: 'hsl(var(--accent))' },
    { name: 'Savings', value: 20, color: 'hsl(var(--secondary))' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/input")}
            className="p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-success" />
            <h1 className="text-xl font-semibold">Results for {userData.name}</h1>
          </div>
        </div>
      </header>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Key Metrics Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Droplets className="h-5 w-5 text-primary" />
                  Harvesting Potential
                </CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {estimatedHarvest.toLocaleString()} litres/year
                  </div>
                <p className="text-sm text-muted-foreground">
                  Based on {rooftopArea} sq.m rooftop in {userData.location}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-success" />
                  Feasibility Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success mb-1">
                  ✅ Feasible
                </div>
                <p className="text-sm text-muted-foreground">
                  Excellent potential for rainwater harvesting
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <IndianRupee className="h-5 w-5 text-warning" />
                  Estimated Cost
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning mb-1">
                  ₹50,000
                </div>
                <p className="text-sm text-muted-foreground">
                  Payback in 2.5 years
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Recommended Structure</CardTitle>
              <CardDescription>
                Based on your rooftop area and location analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Suggested Setup</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Recharge Pit + Storage Tank</li>
                    <li>• First flush diverter system</li>
                    <li>• Filtration unit</li>
                    <li>• Overflow management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Recommended Dimensions</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Pit depth: 2.0 meters</li>
                    <li>• Pit width: 1.5 meters</li>
                    <li>• Storage tank: 5,000 litres</li>
                    <li>• Collection area: {rooftopArea} sq.m</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Bar Chart */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Harvesting Potential</CardTitle>
                <CardDescription>Annual water collection from your rooftop</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [`${value} litres`, 'Annual Harvest']} />
                    <Bar dataKey="harvest" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Cost Distribution</CardTitle>
                <CardDescription>Breakdown of investment and returns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={costData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }: { name: string, percent: number }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {costData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Rainfall Trend */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Rainfall Trend in {userData.location}</CardTitle>
              <CardDescription>Monthly rainfall pattern (cm) throughout the year</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={rainfallData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} cm`, 'Rainfall']} />
                  <Line 
                    type="monotone" 
                    dataKey="rainfall" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/input")}
            >
              Calculate Again
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/")}
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;