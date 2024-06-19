import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname
  return (
    <Navbar className='border-b-2 py-2 px-4 flex justify-between items-center'>
      <Link to="/" className='text-white text-xl font-semibold bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 px-3 py-1 rounded-lg'>
        Sidharth's Blog
      </Link>
      <form className="ml-auto hidden lg:flex">
        <TextInput 
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='bg-gray-100 text-gray-700 px-3 py-1 rounded-lg focus:outline-none focus:ring focus:border-blue-300'
        />
      </form>
      <div className="flex items-center space-x-4">
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button gradientDuoTone="redToBlue" pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
            <Link to='/' active={path==="/"} as={'div'}>
            Home
            </Link>
        </Navbar.Link>
        <Navbar.Link>
            <Link to='/about' active={path==="/about"} as={'div'}>
            About
            </Link>
        </Navbar.Link>
        <Navbar.Link>
            <Link to='/projects' active={path==="/projects"} as={'div'}>
            Projects
            </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}

