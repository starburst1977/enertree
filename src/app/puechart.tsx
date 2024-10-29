/* eslint-disable @typescript-eslint/no-unused-vars */

/// <reference types="react-gauge-chart" />
import GaugeChart from 'react-gauge-chart'

export function PUEChart() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <GaugeChart id="gauge-chart3"
          nrOfLevels={20}
          percent={0.27}
          hideText={true}
        />
        <div className="text-center font-bold text-lg text-black">1.62</div>
      </div>
    </>
  )
}

export default PUEChart;

/* eslint-enable @typescript-eslint/no-unused-vars */