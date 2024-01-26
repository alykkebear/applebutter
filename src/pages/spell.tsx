import Link from 'next/link';
import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
export default function spell() {
  return (
    <>
      <main data-theme = "luxury">
        <Navbar />
        <div className = "join font-mono p-5" >
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
        <div className = "join font-mono p-5">
        <div className="card w-96 p-5 join-item">
          <figure> 
            <img src="./inconvinient.jpg" alt="how inconvinient of you" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Curse of Mild Inconvinence
              <div className="badge badge-secondary">Level 2</div>
            </h2>
            <p>you may be fine now, laughing now, but at some point in the next decade you will be MILDLY INCONVINIENCED! AHAHAHAHA!!! when you stub your toe and are caught in traffic...will you still be laughing?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Basic Spells</div> 
              <div className="badge badge-outline">Curses</div>
              <div className="badge badge-outline">Luck</div>
            </div>
          </div>
        </div>
        <div className="card w-96 p-5 join-item">
          <figure> 
            <img src="./dejavu.jpg" alt="a woman in white standing in a doorway" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Curse of Deja Vu
              <div className="badge badge-secondary">Level 2</div>
            </h2>
            <p>ever walked into a room and completely forgotten why you were there or what you are doing? well get used to it cause for the next month any and all doorways you pass through have a 1% higher chance of triggering deja vu... i'm so devious (･.◤)</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Basic Spells</div> 
              <div className="badge badge-outline">Curses</div>
              <div className="badge badge-outline">Luck</div>
            </div>
          </div>
        </div>
        <div className="card w-96 p-5 join-item">
          <figure> 
            <img src="./dejavu.jpg" alt="a woman in white standing in a doorway" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Minor Healing Buff
              <div className="badge badge-secondary">Level 2</div>
            </h2>
            <p>everyone loves a healer! so as long as they maintain skin contact with you for the duration of the spell their minor cuts and bruises WILL HEAL 2x faster...NONE FOR YOU THOUGH :)))</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Basic Spells</div> 
              <div className="badge badge-outline">Buffs</div>
              <div className="badge badge-outline">Healing</div>
            </div>
          </div>
        </div>
        <div className="card w-96 p-5 join-item">
          <figure> 
            <img src="./dejavu.jpg" alt="a woman in white standing in a doorway" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Minor Strength Buff
              <div className="badge badge-secondary">Level 2</div>
            </h2>
            <p>your rippling muscles gear up to punch your foes with strenghth and momentum enough to destroy worlds...your long flowing hair wafts in the wind and you ponder what has become of you, the strongest one alive...in your dreams, of course. but with this strength buff your muscles will grow 10% faster during workouts (and be 10% more sore :> )</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Basic Spells</div> 
              <div className="badge badge-outline">Buffs</div>
              <div className="badge badge-outline">Strength</div>
            </div>
          </div>
        </div>
        </div>
        <Footer />
     </main>
    </>
  );
}