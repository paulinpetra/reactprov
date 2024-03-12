// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        const filteredData = data.slice(0, 5);
        setPosts(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts: ", error);
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <button
            onClick={() => {
              console.log(post.id);
            }}
          >
            {post.title}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
