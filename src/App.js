const App = () => {
  const categories = [
    { id: 1, title: 'HATS' },
    { id: 2, title: 'JACKETS' },
    { id: 3, title: 'SNEAKERS' },
    { id: 4, title: 'WOMENS' },
    { id: 5, title: 'MENS' },
  ]
  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="background-image"/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>SHOP NOW</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;
