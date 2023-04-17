import Links from "./Links/index"

const Header = () => {
  return (
    <header className="w-full sticky top-0 md:h-[100px] flex items-center bg-fourth">
        <nav className="w-[85%] mx-auto flex flex-row justify-between">
            <h3 className="text-third md:text-[2rem] font-generalSans font-bold"> ARBVerse </h3>
            <Links />
        </nav>
    </header>
  )
}

export default Header