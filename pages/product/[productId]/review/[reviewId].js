import { useRouter } from "next/router";

const ReviewId = () => {
  const router = useRouter();
  const reviewId = router.query.reviewId;
  return <h2>Position of this review is: {reviewId}</h2>;
};

export default ReviewId;
