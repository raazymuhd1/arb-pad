const FeaturesCard = ({feature: { title, desc, icon }}) => {
  return (
    <div className="border-[2px] border-[#303030] min-h-[240px] bg-transparent rounded-[20px] md:w-[350px] w-[350px] p-[10px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.1]">
        <img src={icon} alt="icon" className="object-contain w-[50px] h-[50px] " />
        <h3 className="text-third font-generalSansBold font-bold md:text-[1.5rem] text-[16px] "> {title} </h3>
        <p className="text-third font-generalSansmedium font-medium md:text-[16px] text-[14px] "> {desc} </p>
    </div>
  )
}

export default FeaturesCard