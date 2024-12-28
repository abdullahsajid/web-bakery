'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// import { useToast } from "@/app/_components/ui/toast"
import { Button } from '@/app/_components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/_components/ui/form';
import { Input } from '@/app/_components/ui/input';
import { Textarea } from '@/app/_components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/_components/ui/select';

const accountFormSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: 'Name must be at least 2 characters.',
		})
		.max(30, {
			message: 'Name must not be longer than 30 characters.',
		}),
	description: z
		.string()
		.min(10, {
			message: 'Description must be at least 10 characters.',
		})
		.max(100, {
			message: 'Description must not be longer than 100 characters.',
		}),
	images: z.string(),
    price: z.number(),
    status: z.string(),
    categories: z.string(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
	// name: "Your name",
	// dob: new Date("2023-01-23"),
};

export function AccountForm() {
	const form = useForm<AccountFormValues>({
		resolver: zodResolver(accountFormSchema),
		defaultValues,
	});

	function onSubmit(data: AccountFormValues) {
		// toast({
		//   title: "You submitted the following values:",
		//   description: (
		//     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
		//       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
		//     </pre>
		//   ),
		// })
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 bg-[#fff] border p-4 mb-5'>
				<h1 className='font-bold text-xl'>Product Details</h1>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder='Your name'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder='Description'
									// className="resize-none"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='images'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Images</FormLabel>
							<FormControl>
								<Input
									type='file'
									placeholder='Upload Image'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='price'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Price</FormLabel>
							<FormControl>
								<Input
									type='number'
									placeholder='Price'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='status'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Status</FormLabel>
								<Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
									{...field}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value='active'>Active</SelectItem>
										<SelectItem value='draft'>Draft</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name='categories'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Categories</FormLabel>
								<Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
									{...field}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value='bakery'>Bakery</SelectItem>
										<SelectItem value='sweets'>Sweets</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<Button type='submit'>Update account</Button>
			</form>
		</Form>
	);
}
