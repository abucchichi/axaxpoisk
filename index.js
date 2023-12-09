import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Film = () => {
  const router = useRouter();
  const { filmId } = router.query;

  useEffect(() => {
    if (filmId) {
      // Fetch movie data or perform any other actions
      console.log('Film ID:', filmId);
    }
  }, [filmId]);

  return (
    <div>
      {/* Your film page content goes here */}
      <h1>Film Page</h1>
    </div>
  );
};

export default Film;
