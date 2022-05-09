//our-domain.com/news/newsId

import { useRouter } from "next/router";

const Details = () => {
  
  const router = useRouter();

  const newsId = router.query.newsId

  return <div>Enter</div>;
};

export default Details;
