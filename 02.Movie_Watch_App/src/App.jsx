import Home from './pages/Home'
import { Toaster } from 'react-hot-toast';
function App() {
    return (
        <div className='max-w-2xl m-auto mt-8'>
            <Home/>
            <Toaster position="top-right" reverseOrder={false}/>
        </div>
    )
}

export default App
