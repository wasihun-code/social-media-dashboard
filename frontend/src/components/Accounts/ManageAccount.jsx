import { BiPlug, BiPlus} from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsLinkedin, BsSearch, BsTelegram } from 'react-icons/bs'
import { ImSpinner } from 'react-icons/im';
import { Link } from 'react-router-dom';

const ManageAccount = ({accounts, loading}) => {

  return (
    <div className='flex flex-row my-5 gap-8 place-self-center mx-5 w-full sm:w-11/12'>
    <div className="flex flex-col gap-8 border-2 rounded-xl shadow-xl py-5 px-5 w-full">
      <div className='border-b-2 pb-2'>
        <h1 className="text-2xl font-bold">Accounts</h1>
      </div>

      <div className="flex flex-row place-content-between">
        <input placeholder='Search...' className='p-2 px-2 rounded-lg' />
      </div>

      <div className="w-full overflow-x-auto">
        {
          loading ?
              <div className="flex flex-row w-full">
                <ImSpinner className='text-8xl w-full' /> 
              </div>
            :
          <table className="divide-y divide-gray-300 w-full">
            <thead className="bg-gray-100 text-xl">
              <tr className=''>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Social</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Type</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Status</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Last Connected</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-200 text-xl">
            { 
                accounts.map((account) => (
                <tr key={account.id}>
                  <td className="px-4 py-3.5 flex flex-row gap-4 items-center">
                    <img src={account.platform.icon} alt='platform-icon' className='h-max w-8' />
                    <h1 className="text-xl">{account.platform_name}</h1>
                  </td>
                  <td className="px-4 py-3">{account.name}</td>
                  <td className="px-4 py-3">{account.type}</td>
                  <td className="px-4 py-3">{account.status}</td>
                  <td className="px-4 py-3">{account.last_connected}</td>
                </tr>      
                ))
            }
            </tbody>
          
          </table>
        }
      </div>
    
    </div>
</div>
  )
}

export default ManageAccount