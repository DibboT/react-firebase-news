import { FaGoogle, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h2 className="text-1xl">Login With</h2>
                <button className="btn btn-outline btn-primary w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline btn-primary w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-1xl">Find Us</h2>

                <a className="gap-2 flex items-center border rounded-b-lg text-[#4267B2]" href="">
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="gap-2 flex items-center border rounded-b-lg text-[#F56040]" href="">
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
                <a className="gap-2 flex items-center border rounded-b-lg text-[#1DA1F2]" href="">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="gap-2 flex items-center border rounded-b-lg text-[#E60023]" href="">
                    <FaPinterest></FaPinterest>
                   <span>Pinterest</span>
                </a>




            </div>
            {/* Q Zone*/}
            <div className="p-4 space-y-3 border-t-lg bg-base-100">
                <h2 className="text-1xl">Q Zone</h2>
                <img src={qZone1} alt=''/>
                <img src={qZone2} alt=''/>
                <img src={qZone3} alt=''/>
            
            </div>
        </div>

    );
};

export default RightSideNav;