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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    sno: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
    category: "success",
    productName: "Bag",
        stock: 10,
    totalSales: 10,
  },
  {
    id: "3u1reuv4",
    sno:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
    category: "success",
      productName: "Watch",
      stock: 10,
      totalSales: 10,
  },
  {
    id: "derv1ws0",
    sno:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
    category: "processing",
      productName: "Shoes",
      stock: 10,
      totalSales: 10,
  },
  {
    id: "5kma53ae",
    sno:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
    category: "success",
      productName: "Shirt",
      stock: 10,
      totalSales: 10,
  },
  {
    id: "bhqecj4p",
    sno:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
    category: "failed",
    productName: "Trousers",
    stock: 10,
    totalSales: 10,
  },
]

export type Payment = {
  id: string
  sno: string
  category: "pending" | "processing" | "success" | "failed"
    productName: string
    stock: 10
    totalSales: 10
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "sno",
    header: "S/NO",
    cell: ({ row }) => (
        <div className="capitalize">
            <Avatar className='border-2'>
                <AvatarImage src={`${row.getValue("sno")}`} alt='PK' />
                <AvatarFallback>PK</AvatarFallback>
            </Avatar>
        </div>
    ),
  },
  {
    accessorKey: "productName",
    header: () => <div>Product Name</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("productName")}</div>,
  },
  {
    accessorKey: "category",
    header: () => <div>Category</div>,
    cell: ({ row }) => 
        <div className="lowercase">{row.getValue("category")}</div>,
  },
    {
        accessorKey: "stock",
        header: () => <div>Stock</div>,
        cell: ({ row }) => 
            <div className="lowercase">{row.getValue("stock")}</div>,
    },
    {
        accessorKey: "totalSales",
        header: () => <div>Total Sales</div>,
        cell: ({ row }) => 
            <div className="lowercase">{row.getValue("totalSales")}</div>,
    },
]

export function DataTableDemo() {
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
      <div className="w-full bg-[#fff] p-4 mb-7">
        <div className="mb-4">
            <h1 className="text-2xl font-bold">Top Selling Products</h1>  
        </div>
      <div className="rounded-md border">
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
      </div>
    </div>
  )
}
