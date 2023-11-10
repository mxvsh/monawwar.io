import AboutMe from '@/components/about-me'
import TechStack from '@/components/tech-stack'
import { Button } from '@nextui-org/react'
import React from 'react'
import { RiGithubLine, RiTwitterLine } from 'react-icons/ri'

function HomePage() {
  return (
    <div className="min-h-screen max-w-4xl m-auto flex flex-col gap-12 pt-4 lg:pt-12 px-4 lg:px-0">
      <div className="flex items-start">
        <div>
          <h1 className="text-xl lg:text-4xl text-slate-300 font-bold">
            Monawwar Abdullah
          </h1>
          <p className="text-sm lg:text-medium mt-2 text-slate-600">
            22y. Software Engineer. India.
          </p>
        </div>
        <div className="flex-1" />
        <div className="flex gap-2">
          <a
            href="https://github.com/xencodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button isIconOnly variant="shadow" disableRipple>
              <RiGithubLine size={20} />
            </Button>
          </a>
          <a
            href="https://twitter.com/monawwarx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button isIconOnly variant="shadow" color="primary" disableRipple>
              <RiTwitterLine size={20} />
            </Button>
          </a>
        </div>
      </div>

      <AboutMe />
    </div>
  )
}

export default HomePage
