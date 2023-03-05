import { useContext, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import { DualisHttpClientContext } from '../../App';

function Dualis() {
    const dualisHttpClient = useContext(DualisHttpClientContext);
    const [grades, setGrades] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <h1>Dualis</h1>
            {(grades)?
                (grades.map((semester) => (
                    <div>
                        <h3>{semester.semester}</h3>
                        {semester.modules.map((module) => (
                                <div>
                                    <h4>{module.name}</h4>
                                    {module.exams.map((exam) => (
                                        <div>
                                            {exam.exam}: {exam.grade}
                                        </div>
                                    ))}
                                </div>
                            ))}
                    </div>)))
                :(
                    <div>
                        <h1>Enter your credentials</h1>
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br/>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br/>
                        <button onClick={() => dualisHttpClient.getGrades(username, password).then((grades) => setGrades(grades))}>Get Grades</button>
                    </div>
                )
            }
        
        </Container>
    )
}
export default Dualis;