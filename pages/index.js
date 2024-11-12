import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";

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
        <div className={"bg-blue-900 min-h-screen flex" }>
            <Nav></Nav>
            <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">logged in {session.user.email}</div>
        </div>
    )

}
