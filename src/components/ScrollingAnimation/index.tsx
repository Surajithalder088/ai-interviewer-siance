

const ScrollingAnimation = () => {


    const icons=["google","microsoft","amazon","apple","meta","netflix","tesla","twitter"]

  return (
    <div className="relative overflow-hidden w-full h-full bg-gray-200">
    <div className="absolute flex w-fit h-fit ">
      {icons.map((icon, index) => (
        <p key={index} className="text-lg text-gray-800 mr-8 whitespace-nowrap">
           {icon}
           <p> jhdjkwejk</p>
        </p>
      ))}
    </div>
  </div>
  )
}

export default ScrollingAnimation