function RecipeCard({ title, image, ingredients }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      maxWidth: '300px',
      marginBottom: '1rem'
    }}>
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeCard;
