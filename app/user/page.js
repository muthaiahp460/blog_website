'use client';
import Image from "next/image";
import data from "../data.json";
import styles from './style.css';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div>
        {data.map((dataItem,index) =>{
          
          return(
            <div key={index} className="card">
              <Link href={`/display/${dataItem.id}`}>
                <img src={dataItem.image} alt={dataItem.title} className="card-image" />
              </Link>
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
