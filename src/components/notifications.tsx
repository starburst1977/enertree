/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangle as faTriangle, faCircle as faCircle } from '@fortawesome/pro-solid-svg-icons'
import { faCircleDot as faCircleDot, faCircleSmall as faCircleSmall } from '@fortawesome/pro-solid-svg-icons'
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import {
  Search,
  ChevronsUpDown,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const frameworks = [
  {
    value: "PDU-B1-9",
    label: "PDU-B1-9",
  },
  {
    value: "PDU-B1-10",
    label: "PDU-B1-10",
  },
  {
    value: "PDU-B1-11",
    label: "PDU-B1-11",
  },
  {
    value: "PDU-B1-12",
    label: "PDU-B1-12",
  },
  {
    value: "PDU-B1-13",
    label: "PDU-B1-13",
  },
]
 
export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select device..."}
          <ChevronsUpDown className="opacity-50 size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search device..." className="h-9" />
          <CommandList>
            <CommandEmpty>No device found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: "RowA_Rack1_A",
    status: "Alert",
    active: true,
    email: "The device 192.168.33.208 could not connect, it will be retried.",
  },
  {
    id: "3u1reuv4",
    amount: "RowA_Rack2_A",
    status: "Alert",
    active: true,
    email: "The device at the IP address 192.168.33.211 has not responded to an SNMP request. Perhaps the Community or IP address is incorrect. Om7Sense Gateway will try to poll the device again in several minutes.",
  },
  {
    id: "derv1ws0",
    amount: "RowA_Rack1_A",
    status: "Warning",
    active: true,
    email: "The device 192.168.33.208 could not connect, it will be retried.",
  },
  {
    id: "5kma53ae",
    amount: "RowA_Rack1_B",
    status: "Warning",
    active: true,
    email: "The device 192.168.33.208 could not connect, it will be retried.",
  },
  {
    id: "bhqecj4p",
    amount: "RowA_Rack1_A",
    status: "Alert",
    active: false,
    email: "The device 192.168.33.208 could not connect, it will be retried.",
  },
  {
    id: "derv1ws0",
    amount: "RowA_Rack1_A",
    status: "Warning",
    active: false,
    email: "The device 192.168.33.208 could not connect, it will be retried.",
  },
  {
    id: "5kma53ae",
    amount: "RowA_Rack1_B",
    status: "Warning",
    active: false,
    email: "The device 192.168.33.208 could not connect, it will be retried.",
  },
  {
    id: "bhqecj4p",
    amount: "RowA_Rack1_A",
    status: "Alert",
    active: false,
    email: "The device 192.168.33.208 could not connect, it will be retried.",
  },
]

export type Payment = {
  id: string
  amount: string
  status: "Warning" | "Alert"
  email: string
  active: boolean
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "active",
    header: () => <div className="text-gray-400">Status</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center">{row.getValue("active") ? <FontAwesomeIcon className="text-green-600" icon={faCircleDot} /> : <FontAwesomeIcon className="text-gray-200" icon={faCircleSmall} />}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-gray-400">Type</div>,
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <div className="flex items-center justify-center">
          {status === "Alert" ? <FontAwesomeIcon className="text-red-600" icon={faCircle} /> : <FontAwesomeIcon className="text-yellow-600" icon={faTriangle} />}
          
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 text-gray-400"
        >
          Title
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-gray-400">Location</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("amount")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <div className="flex justify-end pr-6">
          <Button variant="outline">
            Acknowledge
          </Button>
        </div>
      )
    },
  },
]



export function Notifications() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="flex min-h-screen mx-auto w-full max-w-screen-2xl flex-col bg-neutral-100/40 dark:bg-neutral-800/40">
      
      <div className="flex flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 dark:bg-neutral-950 py-4">
        
          <Breadcrumb className="hidden md:flex">
            <SidebarTrigger />
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" className="text-blue-700 font-bold text-lg">Alarms</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="relative ml-auto flex-1 md:grow-0 flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="alert">Alert</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
              </SelectContent>
            </Select>
            <Combobox />
          </div>
          
        </header>
        <main className="bg-white border-t border-neutral-200">
          
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          
        </main>
        <div className="flex items-center justify-end space-x-2 py-4 px-8 border-t">
            <div className="flex-1 text-sm text-muted-foreground text-gray-400">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
}

/* eslint-enable @typescript-eslint/no-unused-vars */