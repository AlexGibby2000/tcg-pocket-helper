import { auth } from "@clerk/nextjs/server";
export default async function AccountPage() {
  const { userId } = await auth();
  if (!userId) {
    return <p>Please log in to view your account.</p>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User Account Page</h1>
    </main>
  );
}
