export default async function handler(req, res) {
    const API_KEY = process.env.TMDB_API_KEY;
  
    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not found in env' });
    }
  
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'TMDB fetch error' });
    }
  }
  