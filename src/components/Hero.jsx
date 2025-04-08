import React from 'react'
const Hero = () => {
  const scrollToTarget = () => {
    const target = document.getElementById("sql-gen");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - window.innerHeight / 2 + target.offsetHeight / 2; // center it
    const duration = 1500; // ms
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    window.requestAnimationFrame(step);
  };

  return (
    <>

      <div className="block text-amber-50  items-center justify-center md:w-4xl text-center display flex flex-grow m-auto sm:mt-20 md:mt-50 ">
        <h1 className='font-bold text-5xl bg-gradient-to-r from-purple-500 via-white to-blue-500 bg-clip-text text-transparent'>Instant SQL: Generate Queries in a Flash with AI </h1>
      </div>
      <p className='text-lg  text-amber-50 items-center justify-center text-center m-6 '>Empower your team with instant SQL generation, no coding skills required<br /> Save time and avoid errors with AI</p>
      <a href="#sql-gen">
      <div className="flex justify-center m-6">
        
        <button onClick={scrollToTarget} className=" bg-blue-400 hover:bg-blue-500 active:border-2 active:border-amber-50 text-white font-bold py-3 px-5 rounded cursor-pointer">Get Started </button>
      </div>
      </a>
    </>
  )
}

export default Hero