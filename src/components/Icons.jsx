export function SunIcon ({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-sun-high' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke={color || 'currentColor'} fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z'></path>
      <path d='M6.343 17.657l-1.414 1.414'></path>
      <path d='M6.343 6.343l-1.414 -1.414'></path>
      <path d='M17.657 6.343l1.414 -1.414'></path>
      <path d='M17.657 17.657l1.414 1.414'></path>
      <path d='M4 12h-2'></path>
      <path d='M12 4v-2'></path>
      <path d='M20 12h2'></path>
      <path d='M12 20v2'></path>
    </svg>
  )
}

export function MoonIcon ({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-moon' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke={color || 'currentColor'} fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'></path>
    </svg>
  )
}

export function HTMLIcon ({ width = 60, height = 60, color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-html5' width={width} height={height} viewBox='0 0 24 24' strokeWidth='2' stroke={color || 'currentColor'} fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z'></path>
      <path d='M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5'></path>
    </svg>
  )
}

export function CSSIcon ({ width = 60, height = 60, color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-css3' width={width} height={height} viewBox='0 0 24 24' strokeWidth='2' stroke={color || 'currentColor'} fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z'></path>
      <path d='M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5'></path>
    </svg>
  )
}

export function JSIcon ({ width = 60, height = 60, color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-javascript' width={width} height={height} viewBox='0 0 24 24' strokeWidth='2' stroke={color || 'currentColor'} fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z'></path>
      <path d='M7.5 8h3v8l-2 -1'></path>
      <path d='M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5'></path>
    </svg>
  )
}

export function AccesibilityIcon ({ width = 60, height = 60, color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-user-pentagon' width={width} height={height} viewBox='0 0 24 24' strokeWidth='2' stroke={color || 'currentColor'} fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z'></path>
      <path d='M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z'></path>
      <path d='M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707'></path>
    </svg>
  )
}

export function WaveIcon ({ theme }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill={`${theme ? '#2D3949' : '#e1e2e3'}` || 'currentColor' } fillOpacity='1' d='M0,128L40,106.7C80,85,160,43,240,42.7C320,43,400,85,480,117.3C560,149,640,171,720,181.3C800,192,880,192,960,170.7C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'></path></svg>
  )
}
