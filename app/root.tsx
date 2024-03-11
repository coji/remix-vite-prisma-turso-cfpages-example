import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { useEffect } from 'react'
import { getToast } from 'remix-toast'
import { toast } from 'sonner'
import { Toaster } from '~/components/ui'
import './tailwind.css'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { toast: toastData, headers } = await getToast(request)
  return json({ toastData }, { headers: toastData ? headers : undefined })
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Toaster />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  const { toastData } = useLoaderData<typeof loader>()

  useEffect(() => {
    if (!toastData) return

    let toastFn = toast.info
    if (toastData.type === 'success') {
      toastFn = toast.success
    } else if (toastData.type === 'error') {
      toastFn = toast.error
    }
    toastFn(toastData.message, {
      description: toastData.description,
    })
  }, [toastData])

  return <Outlet />
}
