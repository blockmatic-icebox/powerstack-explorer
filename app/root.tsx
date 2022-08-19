import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import { appconfig } from './app-config'
import { useStore } from './store'

import ClientStyleContext from './styles/client.context'
import { styled, globalStyles } from './styles/stitches.config'
import type { AppSessionData } from './types'

const Container = styled('div', {
  backgroundColor: '#ff0000',
  padding: '1em',
})

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix with Stitches',
  viewport: 'width=device-width,initial-scale=1',
})

interface DocumentProps {
  children: React.ReactNode
  title?: string
}

const Document = ({ children, title }: DocumentProps) => {
  const clientStyleData = useContext(ClientStyleContext)

  // Only executed on client
  useEffect(() => {
    // reset cache to re-apply global styles
    clientStyleData.reset()
  }, [clientStyleData])

  globalStyles()

  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
          suppressHydrationWarning
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export const loader: LoaderFunction = async ({ request }) => {
  const session_data: AppSessionData = {
    appconfig,
  }
  return json(session_data)
}

export default function App() {
  const session_data: AppSessionData = useLoaderData()

  useEffect(() => {
    useStore.getState().setSessionData(session_data)
  }, [session_data])
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      {/* <StitchesUIProvider theme={stitches_theme}> */}
      <Container>
        <p>
          [CatchBoundary]: {caught.status} {caught.statusText}
        </p>
      </Container>
      {/* <StitchesUIProvider/> */}
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <Container>
        <p>[ErrorBoundary]: There was an error: {error.message}</p>
      </Container>
    </Document>
  )
}
