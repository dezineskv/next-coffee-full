'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    quantity: 'bulk',
    products: 'latte',
    stock: 'In Stock',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    quantity: 'bulk',
    products: 'double espresso',
    stock: 'In Stock',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    quantity: '1',
    products: 'cappucino',
    stock: 'In Stock',
  },
  {
    id: '5kma53ae',
    amount: 874,
    quantity: 'bulk',
    products: 'espresso',
    stock: 'In Stock',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    quantity: '2',
    products: 'coffee beans',
    stock: 'Out of Stock',
  },
  {
    id: 'bhqecj4p',
    amount: 123,
    quantity: 'bulk',
    products: 'coffee',
    stock: 'In Stock',
  },
  {
    id: 'gbhqecj4p',
    amount: 500,
    quantity: '3',
    products: 'coffee cake',
    stock: 'Out of Stock',
  },
  {
    id: 'bhqecj4pj',
    amount: 250,
    quantity: 'bulk',
    products: 'breakfast sandwich',
    stock: 'In Stock',
  },
  {
    id: 'gbhq5ecj4p',
    amount: 500,
    quantity: 'bulk',
    products: 'donut',
    stock: 'In Stock',
  },
  {
    id: 'bhq7ecj4pj',
    amount: 250,
    quantity: 'bulk',
    products: 'drip coffee',
    stock: 'In Stock',
  },
  {
    id: 'bhqecj49pj',
    amount: 250,
    quantity: 'bulk',
    products: 'iced coffee',
    stock: 'In Stock',
  },
  {
    id: 'b0hqecj49pj',
    amount: 250,
    quantity: 'bulk',
    products: 'americano',
    stock: 'In Stock',
  },
  {
    id: 'b8hqecj49pj',
    amount: 250,
    quantity: 'bulk',
    products: 'tea',
    stock: 'In Stock',
  },
];

export type Payment = {
  id: string;
  amount: number;
  quantity: '1' | '2' | '3' | 'bulk';
  products: string;
  stock: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
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
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: ({ row }) => <div className="capitalize">{row.getValue('quantity')}</div>,
  },
  {
    accessorKey: 'products',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-extrabold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Products
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="pl-4 lowercase">{row.getValue('products')}</div>,
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-extrabold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Stock
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="pl-4 lowercase">{row.getValue('stock')}</div>,
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right font-extrabold">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            {/* <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
  });

  return (
    <div className="bg-background mx-auto">
      <div className="my-container mx-auto px-10 pb-10">
        <h1 className="mb-4 text-4xl font-bold">Catering</h1>
        <p>Put in your order now while supplies last!</p>
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by products..."
            value={(table.getColumn('products')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('products')?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns View <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
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
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="h-full">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="text-muted-foreground flex-1 text-sm">
            {table.getFilteredSelectedRowModel().rows.length} of{' '}
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
          <Link href="/products">
            <Button className="text-md max-w-1/2 rounded-md bg-gray-900 py-6 text-white shadow-lg transition-all hover:scale-105 sm:mx-6 md:px-10">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
