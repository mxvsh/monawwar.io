import { RiGithubLine, RiTwitterLine } from 'react-icons/ri'

function Header() {
  return (
    <div className="text-default-500/70">
      <div className="px-6 lg:px-24 pt-6 flex items-center">
        <p className="hover:text-default-500 trasnition duration-300">
          hi@monawwar.io
        </p>
        <div className="flex-1" />
        <div className="flex gap-4 text-2xl items-center">
          <a
            href="https://github.com/xencodes"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubLine className="hover:text-default-500 trasnition duration-300" />
          </a>
          <a
            href="https://twitter.com/monawwarx"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterLine className="hover:text-default-500 trasnition duration-300" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
