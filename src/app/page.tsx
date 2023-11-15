import Companies from '@/components/companies'
import Header from '@/components/header'
import Hero from '@/components/hero'

function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Hero />
      <Companies />
    </div>
  )
}

export default HomePage
