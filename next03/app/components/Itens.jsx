import Link from "next/Link";

export default function Itens({ result }) {
  const itemDescription = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <img
            src={result.thumbnail.source}
            alt={result.title}
            width="150px"
            height="150px"
            loading="lazy"
          />
        </div>
        {itemDescription}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{itemDescription}</article>
  );

  return <>{content}</>;
}
