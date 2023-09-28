import Table from 'react-bootstrap/Table';
function ComparePlans(){
    return(
        <div>
          
    <div className='w-50 m-auto border-0' >       
    <Table striped bordered hover>
      <thead className='border-0'>
        <tr className='border-0' >
          <th className='border-0'>Public</th>
          <th className='border-0'>First Name</th>
          <th className='border-0'>Last Name</th>
          <th className='border-0'>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-bottom-1'>
          <td className='col-6 border-0' >Private</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
        </tr>
        <tr className='border-bottom-1'> 
          <td className='border-0'>Permissions</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
        </tr>
        <tr className='border-bottom-1'>
          <td className='border-0'>Sharing</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
        </tr>
        <tr className='border-bottom-1'>
          <td className='border-0'>Unlimited members</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
        </tr>
        <tr className='border-bottom-1'>
          <td className='border-0'>Extra security</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
          <td className='text-center border-0'>&#10003;</td>
        </tr>
      </tbody>
    </Table>
    </div>

    </div>   
    )
}

export default ComparePlans