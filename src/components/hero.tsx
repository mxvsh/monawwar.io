import { Avatar } from '@nextui-org/react'

function Hero() {
  return (
    <div className="px-6 lg:px-24 py-12 flex flex-col gap-4 relative">
      <Avatar
        alt="monawwar abdullah"
        src="/profile.jpg"
        className="w-28 h-28 rounded-3xl shadow-xl border-1 border-content1 hover:scale-[1.05] hover:-rotate-6 transition duration-300"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl lg:text-4xl max-w-lg text-default-600/70">
          Crafting Innovative Solutions with Code and Precision.
        </h1>
        <p className="text-lg text-default-500/70 max-w-xl">
          Hi there! I&apos;m{' '}
          <b className="text-default-500">Monawwar Abdullah</b>, a software
          engineer based in India. I like to build online tools and cool stuffs
          with <b className="text-default-500">TypeScript</b>.
        </p>
      </div>
    </div>
  )
}

export default Hero
