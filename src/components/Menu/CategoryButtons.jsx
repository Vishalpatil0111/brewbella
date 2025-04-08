import { useNavigate } from 'react-router-dom';
function CategoryButtons() {
  const navigate = useNavigate();

  const categories = ['coffee', 'desserts', 'pastries'];

  return (
    <div className="flex gap-4 justify-center py-5">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => navigate(`/menu/${cat}`)}
          className="bg-[#ddc79f] px-4 py-2 text-black rounded hover:bg-[#c0ae86]"
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons
