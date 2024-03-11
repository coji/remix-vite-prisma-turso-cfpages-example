import { Outlet } from '@remix-run/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui'

export default function Layout() {
  return (
    <div className="h-min-screen grid grid-cols-1 grid-rows-[1fr-auto] gap-4 px-4 py-2">
      <main>
        <Card>
          <CardHeader>
            <CardTitle>Remix / Prisma / Turso / Vercel Example</CardTitle>
            <CardDescription>turso は良さそう</CardDescription>
          </CardHeader>
          <CardContent>
            <Outlet />
          </CardContent>
        </Card>
      </main>

      <footer className="px-4 py-2 text-center">
        <p>© {new Date().getFullYear()} coji</p>
        <a
          href="https://github.com/coji/remix-prisma-turso-vercel-example"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}
