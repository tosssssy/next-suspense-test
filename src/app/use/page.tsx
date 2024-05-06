import { fetchUser } from "@/features/user/fetchUser";
import {
  UserCard_Use,
  UserCard_UseSkeleton,
} from "@/features/user/UserCard_Use";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  const fetchUserPromise = fetchUser("use");
  return (
    <main>
      <h1>Streaming SSR</h1>
      <div className="h-80 bg-red-200"></div>
      <Suspense fallback={<UserCard_UseSkeleton />}>
        <UserCard_Use fetchUserPromise={fetchUserPromise} />
      </Suspense>
      <div className="h-80 bg-red-200"></div>
    </main>
  );
}
