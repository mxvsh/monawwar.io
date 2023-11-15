import Header from '@/components/header'
import Hero from '@/components/hero'
import Info from '@/components/info'

function HomePage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <Header />
      <Hero />
      <Info />
    </div>
  )
}

export default HomePage
