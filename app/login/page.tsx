import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-md">
        <Link href="/" aria-label="Back to home" className="inline-block">
          <Logo />
        </Link>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Sign in to continue protecting mangroves.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        <p className="mt-4 text-center text-xs text-gray-600">
          By signing in you agree to our responsible reporting policy.
        </p>
      </div>
    </main>
  )
}
