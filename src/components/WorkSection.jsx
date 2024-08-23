import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Link } from 'react-router-dom';

const WorkSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*');

        if (error) {
          throw error;
        } else {
          const focusedProject = data.find(project => project.focus === true);
          const otherProjects = data.filter(project => project.focus !== true).slice(0, 2);
          const selectedProjects = [focusedProject, ...otherProjects];
          
          setProjects(selectedProjects);
        }
      } catch (err) {
        setError('Failed to fetch projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (projects.length === 0 || !projects[0]) {
    return <div>No projects available</div>;
  }

  return (
    <div id='work' className='w-full flex flex-col justify-center'>
      <h1 className='text-3xl font-title text-blue pl-2 mb-6'>
        Stuff I&apos;ve worked on
      </h1>
      <div className='flex w-full'>
        {/* Focused Project */}
        <div className='relative flex justify-center items-center p-2' style={{ flexBasis: '50%', flexGrow: 0 }}>
          <div 
            className='group bg-blue text-white flex justify-center items-start rounded-2xl overflow-hidden shadow-2xl'
            style={{
              aspectRatio: '1',
              width: '100%',
              maxWidth: '100%',
              position: 'relative',
              padding: '20px',
            }}
          >
            <div className='flex flex-col justify-start items-start h-full'>
              <h2 className='text-4xl font-title mb-4'>{projects[0]?.name}</h2>
              <p className='text-2xl font-bread w-7/12'>{projects[0]?.smalltext}</p>
              <Link to={`/project/${projects[0]?.id}`} className='text-white text-sm font-title border-2 border-white px-8 py-2 rounded-xl mt-auto justify-self-end hover:bg-white hover:text-blue transition duration-300'>Find out more</Link>
            </div>

            {/* Phone Screenshot */}
            <img 
              src={projects[0]?.thumbnail} 
              alt='Phone Screenshot'
              className='absolute right-20 top-48 transform translate-x-14 group-hover:-translate-y-6 transition-transform duration-500 '
              style={{
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {/* Other Projects */}
        <div className='flex flex-col justify-between p-3' style={{ flexBasis: '50%', flexGrow: 0 }}>
          {projects.slice(1).map((project, index) => (
            <div 
              key={index} 
              className='bg-nav-backdrop text-black flex rounded-2xl shadow-xl'
              style={{
                aspectRatio: '2 / 1',
                width: '100%',
                marginBottom: index === 0 ? '4px' : '0',
              }}
            >
              <div className='text-xl p-4 flex flex-col items-start'>
                <h2 className='text-3xl font-title text-blue mb-4'>{project.name}</h2>
                <p className='text-2xl font-bread w-8/12 text-black'>{project.smalltext}</p>
                <Link to={`/project/${project.id}`} className='text-blue text-sm font-title border-2 border-blue px-8 py-2 rounded-xl mt-auto justify-self-end hover:bg-blue hover:text-white transition duration-300'>Find out more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
