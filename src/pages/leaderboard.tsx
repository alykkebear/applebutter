import Link from 'next/link';
import React from 'react';
import Navbar from "./navbar";

export default function leaderboard() {
    return(
        <>
            <main data-theme="retro" className='bg-base-200'>
                <Navbar />
                <div className="overflow-x-auto">
                <table className="table">
                {/* head */}
                     <thead>
                        <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Score</th>
                        </tr>
                    </thead>
                <tbody>
                {/* row 1 */}
                    <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>300</td>
                    <td>Blue</td>
                    </tr>
               {/* row 2 */}
                    <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                     </tr>
                {/* row 3 */}
                     <tr>
                     <th>3</th>
                     <td>Brice Swyre</td>
                     <td>Tax Accountant</td>
                     <td>Red</td>
                    </tr>
                {/* row 4 */}
                    <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    </tr>
                {/* row 5 */}
                     <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    </tr>
                {/* row 6 */}
                     <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    </tr>
                {/* row 7 */}
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    </tr>
                
    </tbody>
  </table>
</div>
</main>
</>   
    );
}

