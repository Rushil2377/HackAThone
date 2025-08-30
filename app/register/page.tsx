import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function RegisterPage() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-md">
        <Link href="/" aria-label="Back to home" className="inline-block">
          <Logo />
        </Link>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>Choose your role and start contributing.</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>
        <p className="mt-4 text-center text-xs text-gray-600">
          We’ll never share your email. You can change roles later in settings.
        </p>
      </div>
    </main>
  )
}
