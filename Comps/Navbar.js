import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link href={'/'}>
                    <Image src="/LOGO.png" alt="" className='navbar-brand' width={128} height={64}/>
                </Link>
                    
                
                <div className="container-fluid d-flex justify-content-center">
                    <form action="/search" method = 'GET' className='d-flex justify-content-center w-50' role={'search'}>
                        <select name="city" id="court-type" className={'form-select me-2'} required>
                            <option value="" selected disabled hidden>Select your city</option>
                            <option value="dammam">Dammam</option>
                            <option value="khobar">Khobar</option>
                            <option value="dhahran">Dhahran</option>
                            <option value="alahasa">Al Ahsa</option>
                            <option value="saihat">Saihat</option>
                            <option value="qatif">Qatif</option>
                            <option value="riyadh">Riyadh</option>
                            <option value="jeddah">Jeddah</option>
                            <option value="medina">Medina</option>

                        </select>

                        <select name="court-type" id="court-type" className={'form-select me-2'} required>
                            <option value="" selected disabled hidden>Select your sports</option>
                            <option value="all">All Sports</option>
                            <option value="football">Football</option>
                            <option value="tennis">Tennis</option>
                            <option value="basketball">Basketball</option>
                            <option value="paddle">Paddle</option>
                            <option value="volleyball">Volleyball</option>
                        </select>
                    
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

                <div className="d-flex w-25">

                    <Link className='btn btn-outline-success m-2' href='/registration/login'>Sign in</Link>
                    <Link className='btn btn-success m-2' href='/registration/signup'>Sign up</Link>

                </div>
            </div>
            
            

    

        </nav>
     );
}
 
export default Navbar;