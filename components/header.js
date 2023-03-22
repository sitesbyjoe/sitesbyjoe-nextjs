import React from 'react'
import MenuButton from './menu-button'

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  const links = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'About',
      url: '/about'
    },
    { label: 'Portfolio',
      url: '/portfolio'
    }
  ]

  return (
    <header className="relative">
      <div className="logo">
        <a href="/" className="absolute top-2 left-4 uppercase text-white">
          Sites by Joe
        </a>
      </div>
      <MenuButton onClick={() => setShowMobileMenu(!showMobileMenu)} />
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map(link => {
                    return (
                      <a href={link.url} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{link.label}</a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header
