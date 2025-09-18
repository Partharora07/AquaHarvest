import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calculator } from "lucide-react";

const InputForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rooftopArea: "",
    openSpace: "",
    residents: "",
  });

  const locations = [
    "Delhi",
    "Mumbai", 
    "Jaipur",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Lucknow"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in localStorage for the results page
    localStorage.setItem("aquaHarvestData", JSON.stringify(formData));
    navigate("/results");
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Rainwater Harvesting Calculator</h1>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl bg-gradient-hero bg-clip-text text-transparent">
                Enter Your Details
              </CardTitle>
              <CardDescription className="text-lg">
                Provide information about your property to calculate harvesting potential
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base font-medium">
                    Location / District
                  </Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rooftopArea" className="text-base font-medium">
                      Rooftop Area (sq.m)
                    </Label>
                    <Input
                      id="rooftopArea"
                      type="number"
                      placeholder="e.g., 100"
                      value={formData.rooftopArea}
                      onChange={(e) => handleInputChange("rooftopArea", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="openSpace" className="text-base font-medium">
                      Open Space (sq.m)
                    </Label>
                    <Input
                      id="openSpace"
                      type="number"
                      placeholder="e.g., 50"
                      value={formData.openSpace}
                      onChange={(e) => handleInputChange("openSpace", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="residents" className="text-base font-medium">
                    Number of Residents
                  </Label>
                  <Input
                    id="residents"
                    type="number"
                    placeholder="e.g., 4"
                    value={formData.residents}
                    onChange={(e) => handleInputChange("residents", e.target.value)}
                    className="h-12"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full mt-8"
                  disabled={!isFormValid}
                >
                  Calculate Potential
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default InputForm;