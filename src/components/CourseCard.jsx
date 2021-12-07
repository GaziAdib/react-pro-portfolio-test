import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const CourseCard = ({ course }) => {
    return (
        <>

        
                <Card variant="outlined" style={{margin: '5px', padding: '5px', borderRadius: '10px'}} sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image={course.courseImageUrl}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {course.courseTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {course.courseDescription}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small"><a href={course.courseVideoLink} target="_blank">Share</a></Button>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
          
       

            
       
       </>
    )
}

export default CourseCard
