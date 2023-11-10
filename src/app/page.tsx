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
          <p className="sm:text-sm text-medium mt-2 text-slate-600">
            22y. Software Engineer. Currently working at{' '}
            <a
              href="https://appointy.com/"
              className="text-blue-600 hover:underline"
            >
              Appointy.
            </a>
          </p>
        </div>
        <div className="flex-1" />
        <div className="flex gap-2">
          <Button isIconOnly variant="shadow" disableRipple>
            <RiGithubLine size={20} />
          </Button>
          <Button isIconOnly variant="shadow" color="primary" disableRipple>
            <RiTwitterLine size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
