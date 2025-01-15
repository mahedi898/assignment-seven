import './subscribe.css'
const Subscribe = () => {
    return (
        <div className='relative z-10 mb-10 bg-gradient-to-r from-blue-100 to-yellow-100 shadow-lg w-4/5 mx-auto rounded-xl p-8 transform translate-y-1/2 '>
            <div className="subscribe-bg">
                <h1 className='text-3xl font-bold mt-5'>Subscribe to our Newsletter</h1>
                <p className='text-lg text-slate-500 mt-5'>Get the latest updates and news right in your inbox!</p>
                <div className='mt-5'>
                    <input className='w-96 rounded-lg p-2 outline-none' type="text"  placeholder='Enter your email' />
                    <button className='subscribe-btn'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;