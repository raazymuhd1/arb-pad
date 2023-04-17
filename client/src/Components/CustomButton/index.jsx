
const CustomButton = ({title, styles}) => {
  return (
    <button className={` ${styles} font-generalSansBold font-bold rounded-tr-[20px] rounded-bl-[20px] border-none outline-none`}> {title} </button>
  )
}

export default CustomButton