/* eslint-disable @typescript-eslint/no-unused-vars */



"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"

export function Charts() {
  return (
    <div className="chart-wrapper mx-auto max-w-screen-2xl grid grid-cols-3 gap-4 sm:px-6">
      <div className="w-full flex flex-col gap-4">
      
        <Card
          x-chunk="A line chart showing the resting heart rate for past 7 days."
          className="flex flex-col lg:max-w-lg"
        >
          <CardHeader className="pb-0">
            <CardTitle>Dual Feed</CardTitle>
          </CardHeader>
          <CardHeader className="flex flex-row items-center gap-x-4 space-y-0 pb-6 [&>div]:flex-1">
            <div>
              
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                88
                <span className="text-sm font-normal tracking-normal text-neutral-500 dark:text-neutral-400">
                  %
                </span>
              </CardTitle>
              <CardDescription className="text-blue-600"> Capacity A</CardDescription>
            </div>
            <div>
              
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                35
                <span className="text-sm font-normal tracking-normal text-neutral-500 dark:text-neutral-400">
                  %
                </span>
              </CardTitle>
              <CardDescription className="text-purple-600"> Capacity B</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
                desktop: {
                  label: "A",
                  color: "hsl(var(--chart-blue-1))",
                },
                mobile: {
                  label: "B",
                  color: "hsl(var(--chart-purple-1))",
                },
              }}>
              <AreaChart
                accessibilityLayer
                data={[
                  { month: "13.09.", desktop: 26, mobile: 80 },
                  { month: "14.09.", desktop: 28, mobile: 75 },
                  { month: "15.09.", desktop: 41, mobile: 90 },
                  { month: "16.09.", desktop: 34, mobile: 88 },
                  { month: "17.09.", desktop: 24, mobile: 80 },
                  { month: "18.09.", desktop: 18, mobile: 75 },
                ]}
                margin={{
                  left: 6,
                  right: 6,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={true}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-6">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  82
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    %
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">Redundant</div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  101
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    V
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">A Feed Load</div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  231
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    V
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">B Feed Load</div>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card
          x-chunk="A line chart showing the resting heart rate for past 7 days."
          className="flex flex-col lg:max-w-lg"
        >
          <CardHeader className="pb-0">
            <CardTitle>Sensors</CardTitle>
          </CardHeader>
          <CardHeader className="flex flex-row items-center gap-x-4 space-y-0 pb-6 [&>div]:flex-1">
            <div>
              
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                30
                <span className="pl-1 text-sm font-normal tracking-normal text-neutral-500 dark:text-neutral-400">
                  Degrees
                </span>
              </CardTitle>
              <CardDescription className="text-blue-600"> Average High Temp.</CardDescription>
            </div>
            <div>
              
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                45
                <span className="pl-1 text-sm font-normal tracking-normal text-neutral-500 dark:text-neutral-400">
                  Degrees
                </span>
              </CardTitle>
              <CardDescription className="text-purple-600"> Average Low Temp.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
                desktop: {
                  label: "Humidity Low ",
                  color: "hsl(var(--chart-green-1))",
                },
                mobile: {
                  label: "Humidity Av. ",
                  color: "hsl(var(--chart-blue-1))",
                },
                handy: {
                  label: "Humidity High ",
                  color: "hsl(var(--chart-red-1))",
                },
              }}>
              <AreaChart
                accessibilityLayer
                data={[
                  { month: "13.09.", desktop: 26, mobile: 80, handy: 90 },
                  { month: "14.09.", desktop: 28, mobile: 75, handy: 80 },
                  { month: "15.09.", desktop: 41, mobile: 60, handy: 70 },
                  { month: "16.09.", desktop: 34, mobile: 68, handy: 75 },
                  { month: "17.09.", desktop: 24, mobile: 70, handy: 80 },
                  { month: "18.09.", desktop: 18, mobile: 75, handy: 85 },
                ]}
                margin={{
                  left: 6,
                  right: 6,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={true}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="none"
                  stroke="blue"
                  strokeWidth={2}
                  stackId="b"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="none"
                  stroke="green"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  strokeOpacity={0.5}
                  stackId="a"
                />
                <Area
                  dataKey="handy"
                  type="natural"
                  fill="none"
                  stroke="red"
                  strokeWidth={2}
                  strokeOpacity={0.5}
                  strokeDasharray="5 5"
                  stackId="c"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-6">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  42
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    %
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">Av. Humidity</div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  74
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    %
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">Humidity High</div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  40
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    %
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">Humidity Low</div>
              </div>
            </div>
          </CardFooter>
        </Card>
        
      </div>
      <div className="flex flex-col w-full gap-4">
      <Card
          x-chunk="A radial bar chart showing the percentage of time spent moving, exercising, and standing."
          className="max-w-lg"
        >
          <CardHeader className="p-6 pb-0">
            <CardTitle>Health</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 p-6">
            <div className="grid items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-blue-600 dark:text-neutral-400">Neutral Current</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  0.02
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    V
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-purple-600 dark:text-neutral-400">Residual Current</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  0.08
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    A
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-sky-600 dark:text-neutral-400">Averga Load p. CPU</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  10.7
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  A
                  </span>
                </div>
              </div>
            </div>
            <ChartContainer
              config={{
                move: {
                  label: "Move",
                  color: "hsl(var(--chart-blue-1))",
                },
                exercise: {
                  label: "Exercise",
                  color: "hsl(var(--chart-purple-2))",
                },
                stand: {
                  label: "Stand",
                  color: "hsl(var(--chart-blue-2))",
                },
              }}
              className="mx-auto aspect-square w-full max-w-[50%]"
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    activity: "Neutral",
                    value: (2 / 10) * 100,
                    fill: "var(--color-stand)",
                  },
                  {
                    activity: "Residual",
                    value: (4 / 10) * 100,
                    fill: "var(--color-exercise)",
                  },
                  {
                    activity: "CPU",
                    value: (12 / 100) * 100,
                    fill: "var(--color-move)",
                  },
                ]}
                innerRadius="25%"
                barSize={16}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  dataKey="value"
                  tick={false}
                />
                <RadialBar dataKey="value" background cornerRadius={5} />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card
          x-chunk="A bar chart showing voltage, power, and capacity."
          className="lg:max-w-lg"
        >
          <CardHeader>
            <CardTitle>Power Capacity</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 px-6 pb-6">
            <ChartContainer
              config={{
                move: {
                  label: "Voltage",
                  color: "hsl(var(--chart-blue-1))",
                },
                stand: {
                  label: "Power",
                  color: "hsl(var(--chart-blue-1))",
                },
                exercise: {
                  label: "Capacity",
                  color: "hsl(var(--chart-blue-1))",
                },
              }}
              className="h-[140px] w-full"
            >
              <BarChart
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 10,
                }}
                data={[
                  {
                    activity: "voltage",
                    value: (223 / 270) * 100,
                    label: "85%",
                    fill: "var(--color-stand)",
                  },
                  {
                    activity: "power",
                    value: (314 / 754) * 100,
                    label: "52%",
                    fill: "var(--color-exercise)",
                  },
                  {
                    activity: "Capacity",
                    value: (30 / 100) * 100,
                    label: "23 %",
                    fill: "var(--color-move)",
                  },
                ]}
                layout="vertical"
                barSize={32}
                barGap={2}
              >
                <XAxis type="number" dataKey="value" hide />
                <YAxis
                  dataKey="activity"
                  type="category"
                  tickLine={false}
                  tickMargin={4}
                  axisLine={false}
                  className="capitalize"
                />
                <Bar dataKey="value" radius={5}>
                  <LabelList
                    position="insideLeft"
                    dataKey="label"
                    fill="white"
                    offset={8}
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-6">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  223.4
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    V
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">Av. Voltage</div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  314
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    A
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">Power Usage</div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                
                <div className="flex justify-center items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  23
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    %
                  </span>
                </div>
                <div className="text-xs text-center text-neutral-500 dark:text-neutral-400">Capacity</div>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card
          x-chunk="Two horizontal bar charts showing total steps taken during the current year and last year."
          className="max-w-lg"
        >
          <CardHeader>
            <CardTitle>Communication</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                300
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  mbit
                </span>
              </div>
              <ChartContainer
                config={{
                  steps: {
                    label: "Communication Rate",
                    color: "hsl(var(--chart-blue-1))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "Rate",
                      steps: 12435,
                    },
                  ]}
                >
                  <Bar
                    dataKey="steps"
                    fill="var(--color-steps)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="white"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="steps" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                81
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  %
                </span>
              </div>
              <ChartContainer
                config={{
                  steps: {
                    label: "Steps",
                    color: "hsl(var(--color-blue-1))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "Quality",
                      steps: 10103,
                    },
                  ]}
                >
                  <Bar
                    dataKey="steps"
                    fill="hsl(var(--chart-blue-1))"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="white"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="steps" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        
      </div>
      <div className="flex flex-col w-full gap-4">
      <Card
          x-chunk="A bar chart showing the walking and running distance for past 7 days."
          className="max-w-lg"
        >
          <CardHeader className="p-6 pb-0">
            <CardTitle>Firmware</CardTitle>
            <CardDescription>
              Over the last 14 days your devices with firmware deviation for ever day.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-6">
            <div className="flex items-baseline gap-1 text-4xl font-bold tabular-nums leading-none">
              20
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                %
              </span>
            </div>
            <ChartContainer
              config={{
                steps: {
                  label: "Steps",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="ml-auto pl-12 w-full h-24"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    steps: 2000,
                  },
                  {
                    date: "2024-01-02",
                    steps: 2100,
                  },
                  {
                    date: "2024-01-03",
                    steps: 2200,
                  },
                  {
                    date: "2024-01-04",
                    steps: 1300,
                  },
                  {
                    date: "2024-01-05",
                    steps: 1400,
                  },
                  {
                    date: "2024-01-06",
                    steps: 2500,
                  },
                  {
                    date: "2024-01-07",
                    steps: 1600,
                  },
                  {
                    date: "2024-01-08",
                    steps: 2000,
                  },
                  {
                    date: "2024-01-09",
                    steps: 2100,
                  },
                  {
                    date: "2024-01-10",
                    steps: 2200,
                  },
                  {
                    date: "2024-01-11",
                    steps: 1300,
                  },
                  {
                    date: "2024-01-12",
                    steps: 1400,
                  },
                  {
                    date: "2024-01-13",
                    steps: 2500,
                  },
                  {
                    date: "2024-01-14",
                    steps: 1600,
                  },
                ]}
              >
                <Bar
                  dataKey="steps"
                  fill="hsl(var(--chart-blue-1))"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={13}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card
          x-chunk="An area chart showing the time spent in bed for past 7 days."
          className="max-w-lg"
        >
          <CardHeader className="p-6 pb-0">
            <CardTitle>Insights</CardTitle>
          </CardHeader>
          <CardHeader className="flex flex-row items-center gap-x-4 space-y-0 [&>div]:flex-1">
            <div>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                694
              </CardTitle>
              <CardDescription className=""> Total Devices</CardDescription>
            </div>
            <div>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums text-red-600">
                5
              </CardTitle>
              <CardDescription className="text-red-600"> Active Alerts</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-red-600 font-bold">Alerts</TableHead>
                  <TableHead className="text-right">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-right text-red-600">Voltage Drop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                    <TableCell className="text-right text-red-600">Hardware Defect</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                    <TableCell className="text-right text-red-600">Hardware Defect</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-right text-red-600">Voltage Drop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                    <TableCell className="text-right text-red-600">Hardware Defect</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-orange-500 font-bold">Warnings</TableHead>
                  <TableHead className="text-right">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Voltage Drop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Hardware Defect</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Voltage Drop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Hardware Defect</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Voltage Drop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Hardware Defect</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Hardware Defect</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Voltage Drop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                    <TableCell className="text-right text-orange-500">Hardware Defect</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


/* eslint-enable @typescript-eslint/no-unused-vars */