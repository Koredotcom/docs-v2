import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Kore.ai Platform',
    template: '%s – Kore.ai Platform'
  },
  description: 'Build intelligent AI solutions for enterprise productivity, customer service, and process automation.',
  icons: {
    icon: '/favicon.png',
  },
}

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700 }}>Kore.ai Platform</span>}
    projectLink="https://github.com/Koredotcom/docs-v2"
  />
)

const footer = <Footer>Kore.ai Platform Documentation © {new Date().getFullYear()}</Footer>

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Koredotcom/docs-v2/blob/main/src/content"
          editLink="Edit this page"
          feedback={{ content: 'Question? Give us feedback →', labels: 'feedback' }}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
