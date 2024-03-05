import Link from "next/link";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  console.log(router);

  const { currywurst } = router.query;

  const currentMovie = movies.find((movie) => movie.slug === currywurst);

  if (!currentMovie) {
    return null;
  }

  const { title, description, year } = currentMovie;

  return (
    <>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
