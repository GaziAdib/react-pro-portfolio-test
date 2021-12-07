import React, {useEffect,useState} from 'react'

import { ref,  get,  query, orderByKey } from "firebase/database"
import { database } from '../../../firebase'
import { Container, Grid } from '@mui/material'
import CourseCard from '../../../components/CourseCard'



const ShowAllCourses = () => {

    
    const[courses, setCourses] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        //const dbRef = ref(database, 'courses');

        async function fetchCourses() {
            const courseRef = ref(database, "courses");
            const courseQuery = query(courseRef, orderByKey());

            const snapshot = await get(courseQuery);
            setLoading(false);

            if (snapshot.exists()) {
                console.log(snapshot.val())
                setCourses((prevCourses) => {
                    return [...prevCourses, ...Object.values(snapshot.val())];
                });
            } else {
                console.log("Data Doesnot Exist!")
            }
        }

        fetchCourses()

       
    },[])


    return (
        <>
            <h2>Read All Courses Data</h2>

           <Container style={{ backgroundColor: '#e8f4f8', borderRadius: '10px' }}>
                <Grid container spacing={1} justifyContent="center">

                    {
                    courses.map((course) => {
                            return  <Grid item xs={12} md={4} lg={4} sm={12}>
                                <CourseCard course={course}/>
                            </Grid>
                        })
                    }


                </Grid>
           </Container>

         
        </>
    )
}

export default ShowAllCourses












