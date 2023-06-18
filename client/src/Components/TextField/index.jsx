
const TextField = ({ textLabel, type, placeholder, styles, Icon, textArea }) => {
  return (
    <label className={`flex ${textArea ? "gap-y-[30px]" : "gap-y-[10px]"} flex-col`}>
        <span className="text-third md:text-[18px] text-[14px] font-generalSansSemi font-semibold"> {textLabel} </span>
        <div className={`w-full ${Icon && "pl-[5px]" } flex flex-row rounded-[10px] items-center gap-[10px] h-[50px] bg-[#111b27]`}>
            { Icon && <Icon className="text-third md:text-[20px] text-[18px] " /> }
            { !textArea ? (
            <input type={type} className={` ${Icon ? "w-[97%]" : "w-full" } h-full placeholder:text-[#545151] p-[5px] bg-transparent border-none outline-none rounded-[10px]`} placeholder={placeholder} />
            ) : (
            <textarea className="w-full placeholder:text-[#545151] p-[5px] rounded-[10px] mt-[30px]" cols="5" rows="5" placeholder={placeholder} />
            ) }
        </div>
    </label>
  )
}

export default TextField