import Head from 'next/head'
import useSWR from 'swr';
import Header from '../components/Header';
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
          <Header title="TheWebDev Code Snippets" subtitle="Create and browse snippets in Web Development" />
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
