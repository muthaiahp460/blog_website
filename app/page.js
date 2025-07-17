import Image from "next/image";
import data from "./data.json";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <div>
        {data.map((dataItem,index) =>{
          
          return(
            <div key={index} className="card">
              <img src={dataItem.image} alt={dataItem.title} className="card-image" />
              <h2 className="card-title">{dataItem.title}</h2>
              <p className="card-subtitle">{dataItem.sub}</p>
              <p className="rating">★ Rating: {dataItem.ratings}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
