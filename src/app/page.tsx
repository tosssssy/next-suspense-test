import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Streaming SSR と use が機能するかのテスト</h1>

      <div className="mt-12 flex flex-col gap-1">
        <Link href={"/streaming-ssr"} className="text-xl">
          streaming-ssr
        </Link>
        <Link href={"/use"} className="text-xl">
          use
        </Link>
      </div>
    </main>
  );
}
