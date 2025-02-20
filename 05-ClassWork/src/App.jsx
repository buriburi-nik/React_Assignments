import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [subjectName, setSubjectName] = useState('');
  const [hours, setHours] = useState('');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const storedSubjects = localStorage.getItem('geetksterSubjects');
    if (storedSubjects) {
      setSubjects(JSON.parse(storedSubjects));
    }
  }, [])

  useEffect(() => { 
    localStorage.setItem('geetksterSubjects', JSON.stringify(subjects));
  }, [subjects])

  const handleAddSubject = () => { 
    if (!subjectName.trim()) return alert('Please enter a subject'); 
    const newSubject = {
      id: subjects.length + 1,
      name: subjectName,
      hours: parseInt(hours),
    };

    setSubjects([...subjects, newSubject]);
    setSubjectName('');
    setHours('');
  }

  const handleRemoveSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));

   }

  const increamentHours = (hours) => {
    setSubjects(subjects.map((subject) => subject.id === hours ? { ...subject, hours: subject.hours + 1 } : subject));
    setHours('');
    setSubjectName('');

  }

  const decreaseHours = (hours) => {
    setSubjects(subjects.map((subject) => subject.id === hours ? { ...subject, hours: Math.max(0, subject.hours - 1) } : subject));
    setHours('');
    setSubjectName('');
  }

  return (
    <div className="container">
      <h1>Geekster Eduction Planner</h1>

      
      <div className="input-cont">
        <input
          type="text"
          placeholder='Subject-Name'
          value={subjectName}
          className='input-field'
          onChange={(e) =>setSubjectName(e.target.value)}
        />

        < input
          type="text"
          placeholder='hours'
          className='input-field'
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <button
          onClick={handleAddSubject} className='add-btn'        
        >Add</button>  
      </div>

      <ul className="subject-list">
        {subjects.map((subject) => (
          <li key={subject.id} className='list-item'>   
            <span className='subject-name'>{subject.name} </span>
            <span className='subject-hours'>{subject.hours} hours</span>
            <button
              onClick={() => handleRemoveSubject(subject.id)}
              className='remove-btn'
            >Remove</button>

            <button
              onClick={() => increamentHours(subject.id)}
              className='btn'
            >+</button>
            
            <button
              onClick={() => decreaseHours(subject.id)}
              className='btn'
            >-</button>
          </li>
        ))}
      </ul>
      
    </div>
    
  )
}

export default App
