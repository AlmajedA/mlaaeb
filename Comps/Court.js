import Image from "next/image";

const Court = () => {
    return ( 
        <div className="card bg-light m-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src='/LOGO.png' className="img-fluid rounded-start"/>
                </div>
            

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Court</h5>
                        <p className="card-text">Price: 100 SAR</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Court;