import Link from 'next/link';
import React from 'react';
import Navbar from "./navbar";

export default function leaderboard() {
    return(
        <>
            <main data-theme="coffee" className='bg-base-200'>
                <Navbar />
                <div className="overflow-x-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                     <thead>
                        <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Score</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>120</td>
                        <td>2000</td>
                  </tr>
                        <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>100</td>
                        <td>512</td>
                 </tr>
                        <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>1000</td>
                        <td></td>
                 </tr>
                        <tr>
                        <th>4</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                 </tr>
                        <tr>
                        <th>5</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                  </tr>
                        <tr>
                        <th>6</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                  </tr>
                        <tr>
                        <th>7</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                  </tr>
                        <tr>
                        <th>8</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                  </tr>
                        <tr>
                        <th>9</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                  </tr>
                        <tr>
                        <th>10</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                  </tr>
                        <tr>
                        <th>11</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                  </tr>
                        <tr>
                        <th>12</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                  </tr>
                </tbody>
                <tfoot>
                        <tr>
                        <th></th> 
                        <td>Name</td> 
                        <td>Level</td> 
                        <td>Score</td> 
                        <th></th>
                  </tr>
                </tfoot>
            </table>
        </div>
</main>
</>   
    );
}

