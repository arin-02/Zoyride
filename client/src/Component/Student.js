import React from 'react'

function Student() {
  return (
    <div className='std'>
    <div className="head1">
        STUDENT DATABASE
    </div>
    <button className="btn btn-success" >Create</button>
    <table className="tabl table-striped">
        <thead >
          <tr className="ttt">
            <th >Name</th>
            <th >Country</th>
            <th >Salary</th>
            <th >Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className=" ttaa text-center">
          <tr  className="ttt">
            <td className="naming">Carl </td>
            <td className="naming">Sweden </td>
            <td className="naming">24 </td>
            <td className="naming">cluphetret@hotmail.com</td>
            <td>
              <button className="btn btn-primary ">Edit</button>
            </td>
            <td> 
              <button className="btn btn-danger" >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Student