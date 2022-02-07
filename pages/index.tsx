import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      {/* <div className="flex flex-col space-y-2 p-5 ">
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400 first-line:font-bold">
          Hello everyone!Hello everyone!Hello everyone!Hello everyone!Hello
          everyone!Hello everyone!Hello everyone!Hello everyone!Hello
          everyone!Hello everyone!Hello everyone!Hello everyone!Hello
          everyone!Hello everyone!Hello everyone!Hello everyone!Hello
          everyone!Hello everyone!Hello everyone!Hello everyone!Hello
          everyone!Hello everyone!Hello everyone!Hello everyone!Hello everyone!
        </p>
      </div>
      <div className="flex flex-col space-y-2 p-5">
        <input
          type="file"
          className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border file:transition-colors file:border-0 file:rounded-xl file:text-white file:px-5 file:bg-purple-400"
        />
      </div>
      <div className="flex flex-col space-y-2 p-5">
        <ul className="list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-2 p-5">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className=" cursor-pointer">What is my fav. food.</summary>
          <span>sushi</span>
        </details>
      </div> */}
      <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
        {/* <div>
          <form className="flex flex-col space-y-2 bg-blue-500 p-5">
            <input
              type="text"
              required
              placeholder="Nickname"
              className="border p-1 peer border-gray-400 rounded"
            />
            <span className="hidden peer-invalid:block peer-invalid:text-red-500">
              This input is invalid
            </span>
            <span className="hidden peer-valid:block peer-valid:text-teal-500">
              Awesome username
            </span>
            <input type="submit" value="Login" className="" />
          </form>
        </div>
        <div>
          <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
            <input
              type="text"
              disabled
              placeholder="Nickname"
              className="disabled:opacity-50"
            />
            <input
              type="text"
              required
              placeholder="Username"
              className="required:bg-yellow-500 invalid:bg-red-500 valid:bg-teal-500"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="placeholder-shown:bg-teal-500 placeholder-red-500"
            />
            <input type="submit" value="Login" className="bg-white" />
          </form>
        </div> */}
        <div className="bg-white flex flex-col justify-between sm:hover:bg-pink-400 sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-400 xl:bg-yellow-400 2xl:bg-pink-500 p-6 rounded-3xl shadow-xl">
          <span className="font-semibold text-3xl">Select Item</span>
          <ul>
            <div className="flex justify-between my-2 ">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
            <div className="flex justify-between my-2 ">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          </ul>
          <div className="flex justify-between  mt-2 pt-2 border-t-2 border-dashed">
            <span>Total</span>
            <span className="font-semibold">$38</span>
          </div>
          <div className="flex flex-row justify-center">
            <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:-red-500">
              Checkout
            </button>
          </div>
        </div>
        <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
          <div className="portrait:bg-indigo-600 landscape:bg-teal-500 p-6 pb-14 xl:pb-64">
            <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-3xl p-6 bg-white relative -top-5">
            <div className="flex relative -top-16 items-end justify-between">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-red-300 transition-colors"></div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Spent</span>
                <span className="font-medium">$340</span>
              </div>
            </div>
            <div className="relative flex flex-col items-center -mt-10 -mb-5">
              <span className="text-lg font-medium">Tony Molloy</span>
              <span className="text-sm text-gray-500">New York, USA</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
          <div className="flex mb-5 justify-between items-center">
            <span>🔙</span>
            <div className="space-x-3">
              <span>⭐️ 4.9</span>
              <span className="shadow-xl p-2 rounded-md">💖</span>
            </div>
          </div>
          <div className="bg-zinc-400 h-72 mb-5" />
          <div className="flex flex-col">
            <span className="font-medium text-xl">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="mt-3 mb-5 flex justify-between items-center">
              <div className="space-x-3">
                <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
                <button className="w-5 h-5 rounded-full bg-indigo-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
                <button className="w-5 h-5 rounded-full bg-teal-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
              </div>
              <div className="flex items-center space-x-5">
                <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                  -
                </button>
                <span>1</span>
                <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-2xl">$450</span>
              <button className="bg-blue-500 py-2 px-8 text-center text-xs rounded-lg">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
