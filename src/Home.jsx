import React from 'react'
import { ItemCard } from './itemCard';
import { data } from './data';


export const Home = () => {
    console.log(data.productName)
  return (
    <>
      <h1 className="text-center mt-3">All goods</h1>
      <section className="py-4 container">
        <div style={styles}>
          {
            data.productName.map((el, id)=> {
                return <ItemCard img={el.img} title={el.title} el={el} desc={el.desc} price={el.price} key={id} />;
            })
          }
        </div>
      </section>
    </>
  );
}

const styles = {
    display: 'flex',
    justifyContent: 'space-around',
}
