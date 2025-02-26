export default function Home() {
  return (
    <div className="container">
      <h1>Pet Name Generator</h1>
      <form action="/api/generate" method="POST">
        <label>
          Animal Type:
          <input type="text" name="animal" required />
        </label>
        <label>
          Desired Traits:
          <input type="text" name="traits" />
        </label>
        <button type="submit">Generate Name</button>
      </form>
    </div>
  )
}
