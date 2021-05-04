import Head from 'next/head'
import Link from 'next/link';
import useSWR from 'swr';
import Snippet from '../components/Snippet';

export default function Home() {
  const { data: snippets, mutate } = useSWR('/api/snippets');

  return (
    <div>
      <Head>
        <title>Snippet App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-12">
          <h1 className="text-red-100 text-2xl">
            TheWebDev Code Snippets
          </h1>
          <p className="text-red-200">
            Create and browse snippets in Web Development!
          </p>
          <Link href="/new">
            <a className="mt-3 inline-block bg-yellow-800 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create a Snippet!
            </a>
          </Link>
        </div>
        {snippets &&
          snippets.map((snippet) => (
            <Snippet
              key={snippet.id}
              snippet={snippet}
              snippetDeleted={mutate}
            />
        ))}
      </main>
    </div>
  )
}
