const Github = ({ start }) => {
  return <a href="https://github.com/kellyjosephprice/thunk">
    <img alt="Github Link" className={`Github ${start ? 'Github-on' : '' }`} src="./github-corner-right.svg"/>
  </a>
}

export default Github
