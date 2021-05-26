import Moto from "./Moto";
const List = (props) =>{
  return (
    <div>
        {props.motos.map((moto) => (
        <Moto moto={moto.name} count={moto.count} />
    ))}
    </div>
  );
}

export default List;
