import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById } from 'servise/fetchAPI';
import no_photo from '../../images/no_photo.png';
import { CastItem, CastList } from './CastPage.styled';

const CastPage = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCreditsById(id).then(({ data }) => {
      setCredits(data.cast);
    });
  }, [id]);

  return (
    <>
      {credits.length < 1 && <p>We don't have any casts for this movie.</p>}
      <CastList>
        {credits.map(({ character, profile_path, name }, index) => (
          <CastItem key={index}>
            {profile_path === null ? (
              <img src={no_photo} alt={name} width="200px" height="300px" />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt={name}
                width="200px"
              />
            )}
            {name}
            {character && <p>Character: {character}</p>}
          </CastItem>
        ))}
      </CastList>
    </>
  );
};

export default CastPage;
