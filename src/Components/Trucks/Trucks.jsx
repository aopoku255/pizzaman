import '../../../src/index.css'
import TrucksBranch from "../../Data/Trucks";
import {Link} from 'react-router-dom'

const Trucks = ({displayAccra, displayKumasi, displayTrucks}) => {
    const handleClick = (name, map) => {
        sessionStorage.setItem("map", map)
        sessionStorage.setItem("loc", name)
    }
    return (
        <>
            <div className=' flex justify-center'>
                <div className='flex flex-col justify-center items-center mt-36'>
                        <div className=' text-3xl'>
                            Our Branches & Trucks
                        </div>
                    <div className='flex mt-12 text-slate-900 justify-center text-[17px] font-medium border-b-2 border-[#e93e21] gap-5 md:px-20 min-w-[40vw]'>
                        <div className=' text-slate-900 rounded-[3px] px-6 py-3 hover:bg-[#e93e21] hover:text-white cursor-pointer' onClick={displayAccra}>
                            Accra
                        </div>
                        <div className='rounded-t-[3px] px-6 py-3 hover:bg-[#e93e21] hover:text-white cursor-pointer' onClick={displayKumasi}>
                            Kumasi
                        </div>
                        <div className='trucks rounded-t-[3px] px-6 py-3 cursor-pointer' onClick={displayTrucks}>
                            Trucks
                        </div>
                    </div>

                    <div className=' flex flex-wrap justify-center mt-10 gap-14'>
                        {TrucksBranch.map(({id, location, map, btn}, index) => (       
                            <div id={id} className=' flex justify-center items-center bg-slate-900 w-72 h-48 border'>
                                <div className=' flex flex-col items-center text-center mt-6'>
                                    <div className=' text-2xl text-white'>
                                        {location}
                                    </div>
                                    <div className=' text-lg mt-3 w-32 border-[1.5px] rounded-sm hover:border-[#e93e21]'>
                                        <a className=' w-full' href={map} id={id} target='_blank'>
                                            <Link to='/map'>
                                                <button className=' w-full text-[#e93e21]  hover:bg-[#e93e21] hover:text-white' onClick={() => handleClick(location, map)}>
                                                    {btn}
                                                </button>
                                            </Link>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Trucks;