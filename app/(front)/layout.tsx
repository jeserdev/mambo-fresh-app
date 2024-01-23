export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex-grow min-h-screen flex flex-col mx-auto px-4">
      {children}
    </main>
  )
}
