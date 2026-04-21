export default function BlogLoading() {
	return (
		<div className="space-y-6">
			<div className="panel p-6 md:p-8">
				<div className="mb-4 h-9 w-52 animate-pulse rounded bg-[color:rgba(31,42,49,0.12)]" />
				<div className="h-4 w-80 max-w-full animate-pulse rounded bg-[color:rgba(31,42,49,0.1)]" />
			</div>

			<div className="space-y-6">
				{[1, 2, 3].map((i) => (
					<div key={i} className="panel p-6">
						<div className="flex gap-3 mb-3">
							<div className="h-5 w-20 animate-pulse rounded bg-[color:rgba(31,42,49,0.12)]" />
							<div className="h-5 w-24 animate-pulse rounded bg-[color:rgba(31,42,49,0.12)]" />
						</div>
						<div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-[color:rgba(31,42,49,0.12)]" />
						<div className="h-4 w-full animate-pulse rounded bg-[color:rgba(31,42,49,0.1)]" />
						<div className="mt-1 h-4 w-2/3 animate-pulse rounded bg-[color:rgba(31,42,49,0.1)]" />
					</div>
				))}
			</div>
		</div>
	);
}