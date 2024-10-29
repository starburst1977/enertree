/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { useMemo, useState } from "react"
import 'chartjs-adapter-dayjs-3';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import dayjs from "dayjs";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  TimeSeriesScale,
  TimeScale,
);

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DashboardUIState } from "./charts-02"

const chartDayChangeTickFormatOptions: Intl.DateTimeFormatOptions = { 
  day: 'numeric', 
  month: 'numeric' 
};

export const dateTickFormatCb = function(value: number, index: number, ticks: Array<{ value: number }>) {
  return Intl.DateTimeFormat('de-DE', chartDayChangeTickFormatOptions).format(ticks[index].value);
};

function formatGermanDate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  return `${day}.${month}.`;
}

// Generate 30 days of dummy data
const generateDummyData = (numDays: number, scale = 1) => {
  const data = {};
  const startDate = new Date() // today
  for (let i = numDays; i > 0; i--) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() - i);
    const key = dayjs(date).format('YYYY-MM-DD');
    (data as Record<string, number>)[key] = ((Math.sin(i * 0.12) + 1) * 2.5 + Math.random() * 0.75 + 5) * scale; // Generates a value between 5 and 8.5
  }
  return data as Record<string, number>;
}


export interface ChartProps extends DashboardUIState {
  chartTitle: string;
  phaseValues: Record<string, number>;
  unit: string;
}

export default function DashboardChart({ activePhase, activeTimeFrame, chartTitle, phaseValues, unit }: ChartProps) {

  const showMinMax = true;

  const powerData = useMemo(() => {
    return generateDummyData(+activeTimeFrame, 1);
  }, [activeTimeFrame]);

  const minData = useMemo(() => {
    return generateDummyData(+activeTimeFrame, 0.8);
  }, [activeTimeFrame]);
  
  const maxData = useMemo(() => {
    return generateDummyData(+activeTimeFrame, 1.2);
  }, [activeTimeFrame]);

  let timeFrameTitle;
  switch (activeTimeFrame) {
    case "30":
      timeFrameTitle = "30 Day";
      break
    case "14":
      timeFrameTitle = "14 Day";
      break
    case "7":
      timeFrameTitle = "7 Day";
      break
    case "1":
      timeFrameTitle = "Today's";
      break;
  }

  const getDataSet = (isMin: boolean, isMax: boolean, chartData: Record<string, number>) => {
    const hiddenBecauseMinMax = !showMinMax && (isMax || isMin);
    const hidden = hiddenBecauseMinMax; // || hiddenTopics[mainTopic];
    const dataset = {
        data: chartData,
        label: `${chartTitle} (${unit}) $${isMin ? 'min' : ''}${isMax ? 'max' : ''}`,
        borderColor: '#537bc4',
        backgroundColor: '#537bc4',
    };
    if (isMax || isMin) {
        dataset.pointStyle = false;
        dataset.showLine = false;

        dataset.backgroundColor = dataset.borderColor + '33';
        dataset.borderColor = dataset.borderColor + '6f';
        if (isMin) {
            dataset.fill = '+2';
        }
    }
    return dataset;
  }

  const chartData = {
    // labels: powerData.map(item => item.date),
    datasets: [
      getDataSet(true, false, minData),
      getDataSet(false, false, powerData),
      getDataSet(false, true, maxData),
    ],
  };

  console.log('data')

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        color: '#ddd',
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        type: 'time',
        time: {
          minUnit: "day",
        },
        ticks: {
          source: 'auto',
          callback: dateTickFormatCb,
          color: '#bbb',
        },
        title: {
          display: false,
          text: 'Date',
          color: '#ddd',
        },
        grid: {
          display: false,
        }
      },
      y: {
        display: true,
        title: {
          display: false,
          text: `${chartTitle} (${unit})`,
        },
        ticks: {
          color: '#bbb',
        },
        grid: {
          display: false,
        }
      },
    },
  };

  return (
    <Card className="w-full max-w-3xl overflow-hidden">
      
      <CardContent className="px-6 py-4">
        <CardTitle className="pt-2 pb-6 pl-2 flex items-center justify-between">
          <span>{chartTitle}</span><span className="font-normal text-blue-600">{timeFrameTitle}</span>
        </CardTitle>
        <div className="">
          <Line data={chartData} options={chartOptions} />
        </div>
      </CardContent>
      <CardHeader className="p-0">
        <Tabs value={activePhase} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-10 border-b border-input">
            {Object.entries(phaseValues).map(([line, level]) => (
              <TabsTrigger 
                key={line} 
                value={line} 
                className="data-[state=active]:border-none flex flex-col gap-0 items-center px-8"
              >
                <h3 className="text-xs">{line}</h3> 
                <span className="text-base font-bold">{level.toFixed(1)} {unit}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardHeader>
    </Card>
  )
}

export { DashboardChart }

/* eslint-enable @typescript-eslint/no-unused-vars */
