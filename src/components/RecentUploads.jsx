import React from 'react'

const RecentUploads = () => {
  return (
    <div className="rounded-sm flex flex-col border-2 p-4 gap-4 m-6 ">
      <h1 className="text-xl font-bold">Recent Uploads</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Data</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Views</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Likes</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Comments</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2">New</td>
              <td className="px-4 py-2">Hamster</td>
              <td className="px-4 py-2">Dogs on Binance</td>
              <td className="px-4 py-2">200</td>
              <td className="px-4 py-2">50</td>
            </tr>
            <tr>
              <td className="px-4 py-2">New Listing</td>
              <td className="px-4 py-2">Hamster Announcement</td>
              <td className="px-4 py-2">Dogs on Binance</td>
              <td className="px-4 py-2">150</td>
              <td className="px-4 py-2">30</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Another Update</td>
              <td className="px-4 py-2">Cats vs Dogs</td>
              <td className="px-4 py-2">2000</td>
              <td className="px-4 py-2">1000</td>
              <td className="px-4 py-2">450</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentUploads
