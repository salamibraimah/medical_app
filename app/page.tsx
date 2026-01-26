// Import React (optional in Next.js 13+) and your Header component
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      {/* Your Header component */}
      <Header />

      {/* Page content */}
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to my first vibe-coded Next.js app!</h1>
        <p>This is your first page with a header component!</p>
      </main>
    </div>
  );
}
