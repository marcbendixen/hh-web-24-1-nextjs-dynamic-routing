import Link from "next/link";
import { movies } from "../../lib/data";

export default function Movies() {
  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        {movies.map(({ id, title, slug }) => {
          return (
            <li key={id}>
              <Link href={`/movies/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
