import logo from "../src/assets/logo-light.png";

const App = () => {
  return (
    <>
      <div className="bg-[#c2410c] h-16 flex justify-between items-center sticky">
        <div className="w-25 pt-2 ps-5">
          <img src= {logo} alt="" />
        </div>

        <div className="flex gap-5 pe-8">
          <button className="text-white px-4 hover:border">Login</button>
          <button className="bg-white text-[#c2410c] px-4 py-1 rounded hover:border hover:color-red ">Register</button>
        </div>
      </div>

      <div>
        <div className="bg-[url('hero-bg.jpg')] h-screen w-full bg-cover">
        </div>
      </div>
    </>
  )
}

export default App;