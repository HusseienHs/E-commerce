import { useSession, signIn, signOut } from "next-auth/react"



export default function Home() {
    const { data: session } = useSession()
    if(!session) {
        return (
            <div className="bg-blue-900 w-screen min-h-screen flex items-center justify-center">
                <div>
                    <button onClick={() => signIn('google')} className="bg-white p-2 rounded-lg">login with google</button>
                </div>
            </div>
        );
    }
    return (
        <div>logged in {session.user.email}</div>
    )

}
