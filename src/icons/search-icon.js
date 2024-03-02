export default function searchIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 24 24'
    >
      <defs>
        <path
          id='a'
          d='M11.71.573C9.47 1.29 8 3.054 7.3 5.865 6.251 10.08 4.952 10.618.72 9.119c1.52 2.807 4.6 3.932 6.58 3.932 1.98 0 7.11-2.757 6.522-7.998A21.678 21.678 0 0011.71.573z'
        ></path>
        <path
          id='c'
          d='M14.18 12.77l5.53 5.54a.99.99 0 01-1.4 1.4l-5.53-5.539a7.92 7.92 0 111.399-1.401zm-6.26 1.09a5.94 5.94 0 100-11.88 5.94 5.94 0 000 11.88z'
        ></path>
      </defs>
      <g fill='none' fillRule='evenodd' transform='translate(2 2)'>
        <g transform='translate(1 2)'>
          <mask id='b' fill='#fff'>
            <use xlinkHref='#a'></use>
          </mask>
          <use fill='#D8D8D8' xlinkHref='#a'></use>
          <g fill='#FFA0A0' mask='url(#b)'>
            <path d='M-3-4h24v24H-3z'></path>
          </g>
        </g>
        <mask id='d' fill='#fff'>
          <use xlinkHref='#c'></use>
        </mask>
        <use fill='#000' fillRule='nonzero' xlinkHref='#c'></use>
        <g fill='#7600FF' mask='url(#d)'>
          <path d='M-2-2h24v24H-2z'></path>
        </g>
      </g>
    </svg>
  );
}
