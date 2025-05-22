import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log("LOG SESSION", session?.user);

  if (session) {
    return (
      <>
      {/* <img src={session.user.image} /> */}
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut('github')}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  )
}