'use client';

import * as React from 'react';
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
} from '@tanstack/react-table';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/app/_components/ui/table';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';
import { Button } from './ui/button';
import { MoreHorizontal } from 'lucide-react';

const data: Payment[] = [
	{
		id: 'm5gr84i9',
		username: {
			name: 'John Doe',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
		},
		email: "john@gmail.com",
        country: "Nigeria",
        status: "active"
	},
	{
		id: '3u1reuv4',
		username: {
			name: 'John Doe',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
		},
		email: "john@gmail.com",
        country: "Nigeria",
        status: "active"
	},
	{
		id: 'derv1ws0',
		username: {
			name: 'John Doe',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
		},
		email: "john@gmail.com",
        country: "Nigeria",
        status: "active"
	},
	{
		id: '5kma53ae',
		username: {
			name: 'John Doe',
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvId9ySl-OGP2RQpHH4OOeHelOMCqPP35Xw&s',
		},
        email: "john@gmail.com",
        country: "Nigeria",
        status: "active"
	},
];

export type Payment = {
	id: string;
	username: {
		name: string;
		avatar: string;
	};
    email: string;
    country: string;
    status: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'id',
		header: 'S/NO',
		cell: ({ row }) => <div className='capitalize'>{row.getValue('id')}</div>,
	},
	{
		accessorKey: 'username',
		header: () => <div>Product Name</div>,
		cell: ({ row }) => (
			<div className='flex gap-3 items-center'>
				<img
					src={row.original.username.avatar}
					width={60}
					height={60}
					className='rounded-lg border'
				/>
				{row.original.username.name}
			</div>
		),
	},
	{
		accessorKey: 'email',
		header: () => <div>Email</div>,
		cell: ({ row }) => (
			<div className='lowercase'>{row.getValue('email')}</div>
		),
	},
	{
		accessorKey: 'country',
		header: () => <div>Country</div>,
		cell: ({ row }) => <div className='lowercase'>{row.getValue('country')}</div>,
	},
	{
		accessorKey: 'status',
		header: () => <div>Status</div>,
		cell: ({ row }) => (
			<div className='lowercase'>{row.getValue('status')}</div>
		),
    },
    {
		id: 'actions',
		enableHiding: false,
		cell: () => {
			
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='ghost'
							className='h-8 w-8 p-0'>
							<span className='sr-only'>View details</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>View details</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Edit</DropdownMenuItem>
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export function UserTable() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
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
		<div className='w-full bg-[#fff] p-4 mb-7 border rounded-md shadow'>
			<div className='rounded-md border'>
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
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}>
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
									className='h-24 text-center'>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
