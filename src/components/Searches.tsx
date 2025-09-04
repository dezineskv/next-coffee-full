import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Footer() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Search failed');
      const data = await res.json();
      console.log(data); // Debug: see what the API returns
      setResults(data.results);
    } catch (err) {
      setError('Error searching. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="mt-4 flex items-center gap-2 sm:ml-6 sm:pl-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="rounded border px-2 py-1 w-[300px]"
        />
        <button type="submit" className="rounded bg-blue-500 px-3 py-1 text-white">
          <span className="text-xs">
            <Search />
          </span>
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div>
        {results.map((item) => (
          <div key={item._id}>
            <Link href={`/products/${item._id}`}>
              <span className="underline">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
