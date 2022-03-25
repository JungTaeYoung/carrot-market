import type { NextPage } from 'next'

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          Hi how much are you selling them for?
        </p>
      </div>

      <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          I want ￦20,000
        </p>
      </div>

      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          미쳤어
        </p>
      </div>

      <div className="fixed w-full mx-auto max-w-md bottom-4 inset-x-0">
        <div className="flex items-center relative">
          <input
            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
            type="text"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 cursor-pointer">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatDetail
