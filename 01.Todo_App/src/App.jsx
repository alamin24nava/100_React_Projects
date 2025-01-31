import './App.css'
import Home from './pages/Home'

function App() {
  const data = [
    {
        id:1,
        title:"Quality Control Specialist",
        status:false
    },
    {
        id:2,
        title:"Quality Tax Accountan Specialist",
        status:false
    },
    {
        id:3,
        title:"Desktop Support Technicia",
        status:false
    },
    {
        id:4,
        title:"Quality Control Specialist",
        status:false
    },
]
  return (
    <>
      <div className="container mx-auto pt-16">
        <Home data={data}/>
      </div>
    </>
  )
}

export default App
