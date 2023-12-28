import { Link } from 'react-router-dom'

const About = () => {
  console.log("Clicked Successfully")
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About