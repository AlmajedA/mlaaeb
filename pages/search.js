import Court from '../Comps/Court';
import Head from 'next/head';


const Search = () => {
    return ( 
        <>
        <Head>
            <title>MLAAEB | Courts</title>
            <meta name='keywords' content='Court Reservation'/>
        </Head>
        <nav  className='navbar navbar-expand-lg navbar-light'>
            <div className="container-fluid">
                <form action="/search" method="get" className='w-100  d-flex justify-content-end'>
                <select name="city" id="court-type" className={'form-select form-select-sm me-2'} defaultValue={''} required>
                        <option value="" disabled hidden>Select your city</option>
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

                    <select name="court-type" id="court-type" className={'form-select form-select-sm me-2'} defaultValue={''} required>
                        <option value="" disabled hidden>Select your sports</option>
                        <option value="all">All Sports</option>
                        <option value="football">Football</option>
                        <option value="tennis">Tennis</option>
                        <option value="basketball">Basketball</option>
                        <option value="paddle">Paddle</option>
                        <option value="volleyball">Volleyball</option>
                    </select>
                    
                    
                    <label htmlFor="sortby" className='my-auto'>Sort By: </label>
                    <select name="sortby" id="sortby" className={'form-select form-select-sm mx-2'}>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                        <option value="rating">Rating: High to Low</option>
                    </select>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                

                
            </div>

        </nav>
        
        <Court/>
        <Court/>
        <Court/>
        <Court/>
        
        </>
        
        
        
     );
}
 
export default Search;
