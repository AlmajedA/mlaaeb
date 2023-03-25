// import Navbar from "./Navbar";

const TwoSides = ({ left, right }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#212121', height: 'auto'}}>{left}</div>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: 'auto'}}>{right}</div>
    </div>
  );
};

export default TwoSides;