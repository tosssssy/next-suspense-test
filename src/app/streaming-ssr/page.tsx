import {
  UserCard_Streaming,
  UserCard_StreamingSkeleton,
} from "@/features/user/UserCard_Streaming";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1>Streaming SSR</h1>
      <div className="h-80 bg-red-200"></div>
      <Suspense fallback={<UserCard_StreamingSkeleton />}>
        <UserCard_Streaming />
      </Suspense>
      <div className="h-80 bg-red-200"></div>
    </main>
  );
}
