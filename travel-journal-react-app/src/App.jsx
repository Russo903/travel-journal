import './App.css'
import data from './data'
import Head from './Head'
import Card from './Card'

function App() {
  const cards = data.map(element => {
    return <Card
          element={element}
          />
  })

  return (
    <>
      <Head/>
      <div className="card--list">
        {cards}
      </div>
    </>
  )
}

export default App
