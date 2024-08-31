import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplet, Thermometer, Sun } from "lucide-react"

const Gauge = ({ value, max, unit, color }) => {
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
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Agriculture Monitoring System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* pH Level Card */}
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

        {/* Water Level Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Level</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Gauge value={55} max={100} unit="%" color="#3390C1" />
            <p className="text-xs text-muted-foreground mt-2 text-center">Optimal range: 60% - 80%</p>
          </CardContent>
        </Card>

        {/* Soil Moisture Card */}
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

        {/* Temperature Card */}
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

        {/* Light Intensity Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Light Intensity</CardTitle>
            <Sun className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Gauge value={12000} max={20000} unit="lux" color="red" />
            <p className="text-xs text-muted-foreground mt-2 text-center">Optimal range: 10000 - 15000 lux</p>
          </CardContent>
        </Card>

        {/* Crop Health Status Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Crop Health Status</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="success">Good</Badge>
              <span className="text-sm text-muted-foreground">Overall health is satisfactory</span>
            </div>
            <ul className="text-sm space-y-1">
              <li>✅ pH level is optimal</li>
              <li>✅ Water level is sufficient</li>
              <li>⚠️ Soil moisture is slightly low</li>
              <li>✅ Temperature is in range</li>
              <li>✅ Light intensity is adequate</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}