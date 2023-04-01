// import Navbar from "./Navbar";

const TwoSides = ({ left, right}) => {
  return (
    <div  className='container-fluid' style={{height: '100%'}}>
      <div className="row">
        <div className="col-sm-6" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#212121'}}>{left}</div>
        <div className="col-sm-6 " style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>{right}</div>
      </div>
    </div>
  );
};

export default TwoSides;