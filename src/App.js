import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeCard from './components/RecipeCard';

import img1 from './assets/recipe1.jpg';
import img2 from './assets/recipe2.jpg';
import img3 from './assets/recipe3.jpg';

function App() {
  const recipes = [
    {
      title: 'Gâteau au chocolat',
      image: img1,
      ingredients: ['Farine', 'Cacao', 'Œufs', 'Sucre', 'Beurre']
    },
    {
      title: 'Crêpes',
      image: img2,
      ingredients: ['Lait', 'Farine', 'Œufs', 'Sucre', 'Vanille']
    },
    {
      title: 'Salade composée',
      image: img3,
      ingredients: ['Laitue', 'Tomates', 'Concombre', 'Huile d’olive']
    }
  ];

  return (
    <div>
      <Header />
      <main style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {recipes.map((r, i) => (
          <RecipeCard
            key={i}
            title={r.title}
            image={r.image}
            ingredients={r.ingredients}
          >
            <p style={{ marginTop: '0.5rem' }}>
              Une délicieuse recette de {r.title.toLowerCase()}.
            </p>
            <button style={{ marginTop: '0.5rem' }}>Voir la recette</button>
          </RecipeCard>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
