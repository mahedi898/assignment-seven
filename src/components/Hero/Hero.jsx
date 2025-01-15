import './Hero.css'

const Hero = ({handleIncreasePrice}) => {

  return (
      <div className='hero-container'>
        <div  className="bg-color">
        <img className='mt-5' src='https://i.ibb.co.com/QbX3ct1/image-1.png' alt="" />
            <h1 className='text-3xl font-bold mt-5'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-xl text-slate-300 mt-5'>Beyond Boundaries Beyond Limits</p>
            <button onClick={handleIncreasePrice} className='bg-[#E7FE29] button-claim text-black mt-5 mb-5 p-2 text-sm font-bold rounded-md border-[1px] border-black'>Claim Free Credit</button>
      </div>
      </div>
  );
};

export default Hero;
