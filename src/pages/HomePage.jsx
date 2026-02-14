import Sidebar from '../components/Sidebar'

const HomePage = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Sidebar />
            <div className='lg:col-span-3 space-y-6'>
                <div className='bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage