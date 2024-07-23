import { Link } from 'react-router-dom';
import Activity from '../components/Activity';
import Navbar from '../components/Nav';
import './Home.css'; // Note the change to .css

const ACTIVITIES = [
  {
    title: 'Coding Challenge',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nobis blanditiis officia aut corrupti iure'
  },
  {
    title: 'Project Submission',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nobis blanditiis officia aut corrupti iure'
  },
  {
    title: 'Project Quiz',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nobis blanditiis officia aut corrupti iure'
  },
  {
    title: 'Live Assessment',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nobis blanditiis officia aut corrupti iure'
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="heading">
          FnAxiom 
          
          Full Stack Internship
        </div>

        <div className="cta">
          <Link to={'/login'}>
            <button className="loginButton">
              Get Started
            </button>
          </Link>
        </div>

        <div className="activities">
          {
            ACTIVITIES.map(act => (
              <Activity key={act.title} title={act.title} desc={act.desc}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
