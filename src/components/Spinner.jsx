export default function Spinner() {
	return (
		<div className='flex flex-col items-center justify-center h-screen space-y-5'>
			<div className='w-12 h-12 border-4 rounded-full border-primary animate-spin border-t-transparent' />
			<h1 className='text-xl font-light'>Cargando ...</h1>
		</div>
	)
}
