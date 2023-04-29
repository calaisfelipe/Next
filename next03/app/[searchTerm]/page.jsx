
import getWikiResults from "@/lib/getWikiResults";
import Itens from "../components/Itens";


export async function generateMetadata({params }) {
  const wikiData = getWikiResults(params.searchTerm);
  const data = await wikiData;
  const displayTerm = params.searchTerm.replaceAll('%20', ' ')


  if(!data?.query?.pages) {
    return{title: `${displayTerm} Not Found`}
  }

  return {
    title: `Result: ${displayTerm}`,
    description: `Search results for ${displayTerm}`
  
  }
}


export default async function SearchResults({ params: { searchTerm } }) {
  const wikiData = getWikiResults(searchTerm);
  const data = await wikiData;

  const displayTerm = searchTerm.replaceAll('%20', ' ')

 
  const results = data?.query?.pages;
  

  return (
    <main className="p-2 bg-slate-800 py-1 mx-auto max-w-lg min-h-screen text-white flex gap-2 flex-col" >
      
      {results ? (
        
        Object.values(results).map((result) => <Itens key={result.pageid} result={result}/> )

      ) : (
        <h2 className="p-2 text-xl">{`No results for ${displayTerm} `}</h2>
      )}
    </main>
  );
}
