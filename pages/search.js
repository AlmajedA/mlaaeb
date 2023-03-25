import Court from '../Comps/Court';
import Head from 'next/head';


const Search = () => {
    return ( 
        <>
        <Head>
            <title>MLAAEB | Courts</title>
            <meta name='keywords' content='Court Reservation'/>
        </Head>
        <nav  className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid d-flex justify-content-center">
                <form action="" method="get" className='d-flex w-75 justify-content-center'>
                    <label htmlFor="sortby" className='my-auto'>Sort By: </label>
                    <select name="sortby" id="sortby" className={'form-select form-select-sm mx-2 w-25'}>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                        <option value="rating">Rating: High to Low</option>
                    </select>
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
