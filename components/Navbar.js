import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const Navbar = () => {
    const { user, isLoading } = useUser();

    return (
        <nav>
            <Link href="/">
                <a className="text-2xl mb-2 block text-center text-red-200 uppercase">
                    TheWebDev Snippets
                </a>
            </Link>
            <div className="space-x-3 m-x-auto mb-6 flex justify-center">
                {!isLoading && !user && (
                    <Link href="/api/auth/login">
                        <a className="text-red-100 hover:underline">Login</a>
                    </Link>
                )}
                {!isLoading && user && (
                    <>
                    <span className="text-red-100">Hello {user.name}</span>
                    <Link href="/api/auth/logout">
                        <a className="text-red-100 hover:underline">
                            Logout
                            </a>
                    </Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar
