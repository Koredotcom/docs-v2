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
}

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700 }}>Kore.ai Platform</span>}
    projectLink="https://github.com/your-org/kore-platform"
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
          docsRepositoryBase="https://github.com/your-org/kore-platform/tree/main/docs"
          editLink="Edit this page"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
