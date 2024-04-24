import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React from 'react';
import Navbar from './navbar'
import Footer from "./footer";
export default function Home() {
  //const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const data = api.post.getlatest.useQuery().data;

  return (
    <>
       <main data-theme="coffee" class-name = "bg-primary font-mono" >
        <Navbar />
        
        
        <div className="hero min-h-screen" style={{backgroundImage: `url(/map.jpeg)`}}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to ArchiveTerra</h1>
                <p className="mb-5">Archiveterra is a state-of-the art system meant to make archiving fun!!! IK it lookes like crap now but come back in a few months and it'll probably work. Believe in teh belief that it can worrrrkkkkkk idk this is just filler text tbh. i really wanna buy a resin printer ~/br</p>
                  <div>
                    <div> </div>
                    <div className="chat chat-start">
                      <div className="chat-bubble bg-secondary">{data?.map(({id, authorId, content}) =>
                        (
                          <div 
                            key = {id}>{content}
                            
                          </div>
                        ))}
                      </div>
                      </div>
                   <div className="chat chat-end">
                    <div className="chat-bubble bg-primary">{data?.map(({id, authorId, content}) =>
                        (
                          <div 
                            key = {id}>{authorId}
                            
                          </div>
                        ))}</div> </div>
                      <div >
                      {data?.map(({id, authorId, content}) =>
                        (
                          <div className = "overflow-x-auto">
                            <table className = "table justify-text-center bg-secondary">
                              <div>
                                <thead>
                                  <tr>
                                    <th>author ID</th>
                                    <th>content</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                  <td>{authorId}</td>
                                  <td>{content}</td>
                                  </tr>
                                </tbody>
                              </div>
                            </table>
                            
                          </div>
                        ))}
                      </div>

                      <div>
                      {data?.map(({id, authorId, content}) =>
                        (
                          <div 
                            key = {id}>
                            
                          
                        
                          <div className="chat chat-start">
                               <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
                          </div>
                          <div className="chat chat-end">
                               <div className="chat-bubble">You underestimate my power!</div>
                          </div>

                          ))}

                     </div>



                  </div>   
              </div>
            </div>
          </div>
          <Footer />
       </main>
       
    </>
  );
}
//the magic codeeee {data?.map(({id, content}) => (<div key = {id}>{content}</div>))} ⊹⋛⋋( ՞ਊ ՞)⋌⋚⊹
//the magic command npx prisma studio you're welcome