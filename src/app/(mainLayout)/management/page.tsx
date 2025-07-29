// "use client";

// import * as React from "react";
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   SortingState,
//   useReactTable,
//   VisibilityState,
// } from "@tanstack/react-table";
// import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { ColumnDef } from "@tanstack/react-table";
//     import { useEffect, useState } from "react";

// interface Payment   {
//     title: string;
//       price: string;
//     }

//    export const columns: ColumnDef<Payment>[] = [
//       {
//         accessorKey: "title",
//         header: "Title",
//       },
//       {
//         accessorKey: "price",
//         header: "Price",
//       },
//     ];



// export default function Datas() {
//           const [data, setData] = useState<Payment[]>([]);


//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = React.useState({});

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       columnVisibility,
//       rowSelection,
//     },
//   });

//    useEffect(() => {
//         async function fetchData() {
//           const response = await fetch("http://localhost:5000/api/data"); 
//           const result: Payment[] = await response.json();
//           setData(result);
//         }
//         fetchData();
//       }, []);

//   return (
//     <div className="mx-auto bg-white">
//       <div className="my-container bg-white mx-auto px-10 mb-8">
//         <h1 className="font-bold text-4xl mb-4">Product Inventory</h1>    
//         <div className="rounded-md border">
//           <Table>
//             <TableHeader>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <TableRow key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => {
//                     return (
//                       <TableHead key={header.id}>
//                         {header.isPlaceholder
//                           ? null
//                           : flexRender(
//                               header.column.columnDef.header,
//                               header.getContext()
//                             )}
//                       </TableHead>
//                     );
//                   })}
//                 </TableRow>
//               ))}
//             </TableHeader>
//             <TableBody className="h-full">
             
//                 {table.getRowModel().rows.map((row) => (
//                   <TableRow
//                     key={row.id}
                    
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell key={cell.id}>
//                         {flexRender(
//                           cell.column.columnDef.cell,
//                           cell.getContext()
//                         )}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
           
//             </TableBody>
//           </Table>
//         </div>

//       </div>
//     </div>
//   );
// }
