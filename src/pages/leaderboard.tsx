import Link from 'next/link';
import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
import { api } from "~/utils/api";

export default function leaderboard() {
  const data = api.leaderboard.getlatest.useQuery().data;
    return (
        <>
            <main data-theme="coffee" className='bg-base-200'>
                <Navbar />

                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Username</th>
        <th>Level</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody className = "   ">
      {data?.map(({id, Username, Level, Note}) => (
        <tr key={id} className = "border-b-2">
          {/* ID */}
          <td className="w-1/12 py-3 pl-16">{id + 1}</td>
          {/* username */}
          <td className = "w-2/12">
            {Username}
          </td>
          {/* level */}
          <td className = "w-2/12">
            {Level}
          </td>
          {/* Note*/}
          <td className = "w-2/12">
            {Note}
          </td>
        </tr>
      ))}
      
    </tbody>
  </table>
</div>                 










  {/*              <div className="overflow-x-auto">
                <table className="table">
                
                <thead>
                  <tr>
                    <th>
                      <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Level</th>
        <th>Score</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="Hart.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
         400
          <br/>
          <span className="badge badge-ghost badge-sm">Pokemon</span>
        </td>
        <td>1000</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="Luke.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Luke Christoph</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
         395
          <br/>
          <span className="badge badge-ghost badge-sm">Among Us</span>
        </td>
        <td>2000</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="Ellianan.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Elliana Roberts </div>
              <div className="text-sm opacity-50">Japan</div>
            </div>
          </div>
        </td>
        <td>
          385
          <br/>
          <span className="badge badge-ghost badge-sm">Among Us</span>
        </td>
        <td>700</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="Brice.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          295
          <br/>
          <span className="badge badge-ghost badge-sm">Roblox</span>
        </td>
        <td>260</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="Marjy1.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
         295
          <br/>
          <span className="badge badge-ghost badge-sm">Among Us</span>
        </td>
        <td>500</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="Lisa.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Lisa Ferdandez</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
         294
          <br/>
          <span className="badge badge-ghost badge-sm">Among Us</span>
        </td>
        <td>600</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="Lily.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Lily Smoke</div>
              <div className="text-sm opacity-50">America</div>
            </div>
          </div>
        </td>
        <td>
         292
          <br/>
          <span className="badge badge-ghost badge-sm">Among Us</span>
        </td>
        <td>400</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="Yancy1.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          290
          <br/>
          <span className="badge badge-ghost badge-sm">Roblox</span>
        </td>
        <td>150</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    
    
    
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Level</th>
        <th>Score</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
*/}
<Footer />
                
</main>
</>   
);
}

