import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

const Enroll = ({ courses }) => {
    return (
      <div className="notes-container text-black m-2">
        <h1 className='text-center text-blue-500 font-semibold text-2xl'>Training</h1>
        <div className="md:justify-center m-2 md:grid">
          {courses.map(course => {
            return (
              <div key={course._id}>
                <Card className='p-3 text-xl text-semibold md:ml-12 md:mr-12'>
                  <Card.Content>
                    <Card.Header>
                      <Link href={`/${course._id}`}>
                        <a>{course.firstName}</a>
                      </Link>
                      <Link href={`/${course._id}`}>
                        <a>{course.lastName}</a>
                      </Link>
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Link href={`/${course._id}`}>
                      <Button primary className='ml-4 mr-1 border border-blue-500 hover:bg-blue-500 hover:text-white p-1 rounded-md'>View</Button>
                    </Link>
                    <Link href={`/${course._id}/edit`}>
                      <Button primary className='hover:border-blue-500 hover:border hover:bg-white hover:text-blue-500 bg-blue-500 text-white pl-2 p-1 pr-2 rounded-md'>Edit</Button>
                    </Link>
                  </Card.Content>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  
  Enroll.getInitialProps = async () => {
    const res = await fetch('https://learnhubphdemo.azurewebsites.net/api/training');
    const { data } = await res.json();
  
    return { courses: data }
  }
  
  export default Enroll;