function Header() {
    return (
        <div className="hidden lg:flex items-center mt-28 mx-20">
            <div className="hidden lg:flex ml-auto text-lg gap-16 ">
                <a href="#">
                    <div className="transform duration-75 hover:text-[#e38bf0] hover:scale-110 cursor-pointer">Home</div>
                </a>
                <a href="#product">
                    <div className="transform duration-75 hover:text-[#e38bf0] hover:scale-110 cursor-pointer">Shop</div>
                </a>
                <a href="#class">
                    <div className="transform duration-75 hover:text-[#e38bf0] hover:scale-110 cursor-pointer">Book Online</div>
                </a>
                <a href="#contact">
                    <div className="transform duration-75 hover:text-[#e38bf0] hover:scale-110 cursor-pointer">Contacat</div>
                </a>
            </div>
        </div>
    )
}

export default Header
