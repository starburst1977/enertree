import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./card"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export function AlertList() {
    return (
    <>
        <Card
          x-chunk="An area chart showing the time spent in bed for past 7 days."
          className="max-w-xl"
        >
          <CardHeader className="p-6 pb-0">
            <CardTitle>Insights</CardTitle>
          </CardHeader>
          <CardHeader className="flex flex-row items-center gap-x-4 space-y-0 [&>div]:flex-1">
            <div>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums text-red-600">
                12
              </CardTitle>
              <CardDescription className="text-red-600"> Active Alerts</CardDescription>
            </div>
            <div>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums text-amber-500">
                27
              </CardTitle>
              <CardDescription className="text-amber-500"> Active Warnings</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className="">Alert source</TableHead>
                  <TableHead className="text-right">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">PDU RowA_Rack1_A</TableCell>
                    <TableCell className="text-right text-red-600">Voltage Drop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU RowA_Rack3_B</TableCell>
                    <TableCell className="text-right text-red-600">Input current on L1: 23 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rack C27</TableCell>
                    <TableCell className="text-right text-red-600">Feed balance: 77%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU RowB_Rack7_A</TableCell>
                    <TableCell className="text-right text-red-600">Temperature: 30.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Row E</TableCell>
                    <TableCell className="text-right text-red-600">Humidity: 52%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Row A</TableCell>
                    <TableCell className="text-right text-red-600">Humidity: 57%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU RowC_Rack8_A</TableCell>
                    <TableCell className="text-right text-red-600">Outlet #13 current: 1.2 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU RowE_Rack2_B</TableCell>
                    <TableCell className="text-right text-red-600">Temperature #2: 33.2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU RowF_Rack7_A</TableCell>
                    <TableCell className="text-right text-red-600">Input Line Frequency on L2: 51.2 Hz</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PDU RowA_Rack2_B</TableCell>
                    <TableCell className="text-right text-red-600">Input unbalanced current: 33%</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
      </>
    );
}