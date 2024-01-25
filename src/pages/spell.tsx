import Link from 'next/link';
import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
export default function spell() {
  return (
    <>
      <main data-theme = "luxury">
        <Navbar />
        <div className = "join font-mono" >
        <div className="card join-item w-96 p-5">
          <figure> 
            <img src="./waterblast.jpg" alt="water blast" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Water Blast
              <div className="badge badge-secondary">Level 1</div>
            </h2>
            <p>blast water in your opponents face with the equivalent force of a moist underfilled water balloon and DELIGHT IN THEIR DOWNFALL MWAHAHAHAHA...or get a drink of water idc</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Basic Spells</div>
              <div className="badge badge-outline">Elemental</div> 
              <div className="badge badge-outline">Water</div>
            </div>
          </div>
        </div>
        <div className="card w-96 p-5 join-item">
          <figure> 
            <img src="./fireflick.jpg" alt="fire flick" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Fire Flick
              <div className="badge badge-secondary">Level 1</div>
            </h2>
            <p>burn your opponents with your mighty candle flame and watch as they wince menacingly AHAHAHAHA...or start a small fire honestly</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Basic Spells</div> 
              <div className="badge badge-outline">Elemental</div>
              <div className="badge badge-outline">Fire</div>
            </div>
          </div>
        </div>
        <div className="card w-96 p-5 join-item">
          <figure> 
            <img src="./earthsmash.jpg" alt="earth smash" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Earth Smash
              <div className="badge badge-secondary">Level 1</div>
            </h2>
            <p>hit the ground really hard and impress your friends as pebbles pelt from above... where did the come from??!!?? WHERE DID THEY GO??!!?? WHerE DId THey cOMe FroM CoTtoN EyE jOE??!!?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Basic Spells</div> 
              <div className="badge badge-outline">Elemental</div>
              <div className="badge badge-outline">Earth</div>
            </div>
          </div>
        </div>
        <div className="card w-96 p-5 join-item">
          <figure> 
            <img src="./windwhoosh.jpg" alt="wind whoosh" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Wind Whoosh
              <div className="badge badge-secondary">Level 1</div>
            </h2>
            <p>blow out your opponents' hopes and dreams of failure because there's a new looser in town...YOU!!! your cute little wind whoosh could barely extinguish a candle. woe is you ya lil tryhard</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Basic Spells</div> 
              <div className="badge badge-outline">Elemental</div>
              <div className="badge badge-outline">Wind</div>
            </div>
          </div>
        </div>
        </div>
        <Footer />
     </main>
    </>
  );
}