"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplet, Thermometer, Sun } from "lucide-react"
import { useState,useEffect } from "react"

const Gauge = ({ value, max, unit, color }: any) => {
  const percentage = (value / max) * 100
  const angle = (percentage / 100) * 360

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={`${angle} 360`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs">{unit}</span>
      </div>
    </div>
  )
}

export default function Component() {

  const [moisture,setMoisture] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.137.67/moisture",{
          method: "GET"
        });
        const data = await response.json();
        let moisture = data.moistureData;
        moisture = 1024 - moisture;
        moisture = Math.floor(moisture / 1024 * 100);
        console.log(moisture + "%");
        setMoisture(moisture);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, 1000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
 }, []);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Agriculture Monitoring System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">pH Level</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Gauge value={6.8} max={14} unit="pH" color="green" />
            <p className="text-xs text-muted-foreground mt-2 text-center">Optimal range: 6.0 - 7.0</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Level</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Gauge value={moisture} max={100} unit="%" color="#3390C1" />
            <p className="text-xs text-muted-foreground mt-2 text-center">Optimal range: 60% - 80%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Soil Moisture</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Gauge value={35} max={100} unit="%" color="brown" />
            <p className="text-xs text-muted-foreground mt-2 text-center">Optimal range: 20% - 60%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Gauge value={24} max={50} unit="°C" color="yellow" />
            <p className="text-xs text-muted-foreground mt-2 text-center">Optimal range: 20°C - 30°C</p>
          </CardContent>
        </Card>

        

      </div>
    </div>
  )
}