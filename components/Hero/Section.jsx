import Card from '../Card'
import { PaySection } from '../PaySection';
function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = src;
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}
export const Section = ({ name, members }) => {
  return (
    <div className='odd:bg-blue-500 even:bg-orange-50 odd:text-white odd:shadow-[inset_0_0_15px_#2d66c3] px-8 py-32 z-0 relative shadow-inner'>
      {/* decorative svg */}
      <div className='absolute top-8 right-1/3 md:right-2/3 z-[-1]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 872 264" width="872" height="264"><defs><pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="4" fill="rgba(0, 0, 0, 0.05)" /></pattern></defs><rect fill="url(#p)" width="872" height="264" /></svg>
      </div>

      <div className='md:absolute -z-10 md:right-8 lg:right-32 w-full flex flex-row md:justify-end'>
        {/* <PaySection bgcolor={col} color={getColor(name)} /> */}
        <p className={`text-outline-dark text-3xl uppercase border-t-4 border-t-pink-400 inline font-bold md:border-0 md:font-extrabold md:select-none md:text-transparent md:text-[180px]`}>
          {name}
        </p>
      </div>
      <div className='flex justify-center'>
          <div className="relative my-12 overflow-hidden">
            <div className="relative flex gap-1 overflow-auto scroll-smooth snap-x snap-mandatory z-0" >
              {
                members.map(member => <Card key={member.rollno} props={member} />)
              }
          </div>
        </div>
      </div>
    </div>
  )
}
