import { useEffect, useState } from 'react';
import axios from 'axios'
import TableRow from './Component/TableRow';

function App() {

  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get('https://api.delta.exchange/v2/products?page_size=30');
      setData(response.data.result) // getting only data
      // console.log(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }




  useEffect(() => {
    
    getData();

  }, [])



  return (
    <div className="m-0 p-0 bg-gray-800 py-4">
      <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-11/12 md:w-8/12">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-y-scroll max-h-[90vh] rounded-md">
              <table className="relative min-w-full ">
                <thead className="!bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium bg-white text-gray-900 px-6 py-4 text-left !sticky !top-0">
                      Symbol
                    </th>
                    <th scope="col" className="text-sm font-medium bg-white text-gray-900 px-6 py-4 text-left !sticky !top-0 ">
                      Description
                    </th>
                    <th scope="col" className="text-sm font-medium bg-white text-gray-900 px-6 py-4 text-left !sticky !top-0 ">
                      Underlying Asset
                    </th>
                    <th scope="col" className="text-sm font-medium bg-white text-gray-900 px-6 py-4 text-left !sticky !top-0 ">
                      Mark Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item)=>(
                      
                      <TableRow key={item.id} data={item}/>
                    ))
                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default App;
