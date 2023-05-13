import Image from "next/image";
import Link from "next/link";
import ReactStars from "../Comps/react-stars";

const Court = ({
                action = "Book Now", 
                page,
                name = "Court Name",
                type,
                price = 100,
                rate = 3,
                lastUpdate = "5 min"}) => {
    return ( 
        <div className="card bg-light m-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src='/footballCourt.jpg' className="img-fluid rounded-start"/>
                </div>
            

                <div className="col-md-8">
                    <div className="card-body d-flex flex-column h-100 justify-content-between">
                        
                        
                            <h5 className="card-title">{name}, {type} Court</h5>
                            <p className="card-text">Price: {price} SAR</p>
                            <ReactStars edit={false} value={rate} size={20}/>
                            <p className="card-text"><small className="text-muted">Last updated {lastUpdate} ago</small></p>
                            <Link className='btn btn-success btn-lg align-self-end' href={page}>{action}</Link>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Court;