import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect } from "react";



const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{

        setTimeout(()=>{
            router.push('/')

        }, 3000)

    }, [])
    return ( 
        <div className="container-fluid">
            <h1>Not Found</h1>
            <h2>This page cannot be found</h2>
            <Link href={'/'} className='btn btn-primary'>Home</Link>
            
        </div>
     );
}
 
export default NotFound;