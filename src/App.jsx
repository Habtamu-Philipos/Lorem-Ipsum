import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const id = nanoid()
  function handleSubmit(e) {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          min={1}
          step={1}
          max={8}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((text) => (
          <p key={id}>{text}</p>
        ))}
      </article>
    </section>
  )
}
export default App
