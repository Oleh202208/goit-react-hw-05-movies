import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'servise/fetchAPI';
import {
  ReviewItem,
  ReviewList,
  ReviewSpan,
  ReviewText,
} from './ReviewsPage.styled';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchReviewsById(id).then(({ data }) => setReviews(data.results));
  }, [id]);

  return (
    <>
      {reviews.length < 1 && <p>We don't have any reviews for this movie.</p>}
      <ReviewList>
        {reviews.map(({ author, content }, index) => (
          <ReviewItem key={index}>
            <ReviewSpan>Author: </ReviewSpan>
            {author}
            <ReviewText>{content}</ReviewText>
          </ReviewItem>
        ))}
      </ReviewList>
    </>
  );
};

export default ReviewsPage;
