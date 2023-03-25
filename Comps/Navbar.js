import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link href={'/'}>
                    <Image src="/LOGO.png" alt="" className='navbar-brand' width={128} height={64}/>
                </Link>
                    
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <Link href="/about" className='nav-link'>About</Link>
                    </li>
    
                </ul>
                <div className="container-fluid d-flex justify-content-center">
                    <form action="/search" method = 'GET' className='d-flex justify-content-center w-50' role={'search'}>
                    <select name="court-type" id="court-type" className={'form-select me-2'}>
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

                    <button className='btn btn-success'>Login / Sign in</button>


                </div>
            </div>
            
            

    

        </nav>
     );
}
 
export default Navbar;