import Header from './components/Header';
import Footer from './components/Footer';
import RecipeCard from './components/RecipeCard';

import img1 from './assets/recipe1.jpg';
import img2 from './assets/recipe2.jpg';
import img3 from './assets/recipe3.jpg';

function App() {
  const recipes = [
    {
      title: 'Chocolate Cake',
      image: img1,
      ingredients: ['Flour', 'Cocoa', 'Eggs', 'Sugar', 'Butter']
    },
    {
      title: 'Pancakes',
      image: img2,
      ingredients: ['Milk', 'Flour', 'Eggs', 'Sugar', 'Vanilla']
    },
    {
      title: 'Salad Bowl',
      image: img3,
      ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Olive oil']
    }
  ];

  return (
    <div>
      <Header />
      <main style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {recipes.map((r, i) => (
          <RecipeCard key={i} title={r.title} image={r.image} ingredients={r.ingredients} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
