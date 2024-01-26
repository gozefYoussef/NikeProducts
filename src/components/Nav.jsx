import { useState } from 'react'
import {hamburger} from '../assets/icons'
import {headerLogo} from '../assets/images'
import {navLinks} from '../constants/index'

const Nav = () => {
    const [toggle,setToggle] = useState(false);
    const handleChange = () => {
        setToggle(prevState => !prevState)
    }
  return (
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                    src={headerLogo}
                    alt='logo'
                    width={130}
                    height={29}
                />
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((link)=> (
                    <li key={link.label}>
                        <a 
                            href={link.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block relative'>
                {!toggle && <img 
                    src={hamburger}
                    alt='toggle'
                    width={25}
                    height={25}
                    onClick={handleChange}
                />
                }
                {toggle && 
                <ul className='block top-0 right-0 absolute'>
                {navLinks.map((link)=> (
                    <li key={link.label}>
                        <a 
                            href={link.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                            onClick={()=>handleChange()}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            }
            </div>
        </nav>
      </header>
  )
}

export default Nav