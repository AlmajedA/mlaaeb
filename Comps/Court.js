import Image from "next/image";
import Link from "next/link";
import ReactStars from "../Comps/react-stars";

const Court = () => {
    return ( 
        <div className="card bg-light m-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src='footballCourt.jpg' className="img-fluid rounded-start"/>
                </div>
            

                <div className="col-md-8">
                    <div className="card-body d-flex flex-column h-100 justify-content-between">
                        
                        
                            <h5 className="card-title">Court</h5>
                            <p className="card-text">Price: 100 SAR</p>
                            <ReactStars edit={false} value={4} size={20}/>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <Link className='btn btn-success btn-lg align-self-end' href='/dashboard'>Book Now</Link>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Court;