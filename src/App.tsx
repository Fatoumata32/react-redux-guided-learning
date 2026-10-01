import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <main className="activity">
      <header className="activityHeader">
        <p className="eyebrow">React state lab / 01</p>
        <h1>Redux, by hand.</h1>
        <p className="intro">
          One shared store. Explicit actions. State you can follow.
        </p>
      </header>
      <Counter />
      <footer className="activityFooter">
        <span>Manual Redux</span>
        <span>Persisted locally</span>
        <span>Typed with TypeScript</span>
      </footer>
    </main>
  )
}

export default App