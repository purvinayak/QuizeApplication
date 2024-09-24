//this is make application using Class Component
import React from 'react';
import IconButton from '@mui/material/IconButton';
import './styles.css'
import { jsPDF } from "jspdf";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          username:localStorage.getItem('username'),
            selectedOption: "",
            score: 0,  

      userAnswers:{},
   

      

            questions: [
                {
                    id: 1,
                    question: "What is the addition of 2+4?",
                    options: [4, 5, 6, 8],
                    answer: 6
                },
                {
                    id: 2,
                    question: "What is the subtraction of 4-1?",
                    options: [4, 5, 3, 8],
                    answer: 3
                },
                {
                    id:3,
                    question:"What is the multiplication of 6*4 ?",
                    options:[24,33,56,42],
                    answer:24
                 },
                 {
                    id:4,
                    question:"What is the Factorial of 4 ?",
                    options:[4,24,42,16],
                    answer:24
                 },
                 {
                    id:5,
                    question:"What is the Division of 8/2 ?",
                    options:[4,5,6,8],
                    answer:4
                 },
                 {
                    id:6,
                    question:"What is the Squre of 11 ?",
                    options:[212,121,221,112],
                    answer:121
                 },
                 {
                    id:7,
                    question:"What is the root of 144 ?",
                    options:[11,12,21,13],
                    answer:12
                 },
                 {
                    id:8,
                    question:"What is the Quabe of 3 ?",
                    options:[9,27,87,11],
                    answer:27
                 },
                 {
                    id:9,
                    question:"What is the  Multiplication of 2*6*7 ?",
                    options:[84,49,48,86],
                    answer:84
                 },
                 {
                    id:10,
                    question:"What is the factorial of 8 ?",
                    options:[40320,40330,40230,40310],
                    answer:40320
                 }
                
            ]
        };
        
    }



        
    result = () => {
        let score = 0;
        
      



        this.state.questions.forEach((question) => {
    
          if (parseInt(this.state.userAnswers[question.id]) === question.answer) {
            score++;
          }
        
        });
      
      
        this.setState({ score}, () => {
            console.log(this.state.score)
        
        });
      };

  
  handleClick1=()=>{
    if (this.areAllQuestions()) {
    const doc = new jsPDF();

    doc.text("Score is", 10,10);
    doc.text(` your score is${this.state.score}`, 10,20);
  doc.text(`hii  ${this.state.username} successfully complated Quize `,5,5)

    doc.save("score.pdf");
    
  }

else{
  alert("Please answer all questions before downloading the score.");
}
};
  

    handleClick=()=>{
        console.log(this.state.userAnswers);
         //when select complete questions then only recieve score othervise get alert//

  
  if(Object.keys(this.state.userAnswers).length !== this.state.questions.length) {
    alert("Please select all questions");
  

 
}else {
  this.result();

    }
  }
   areAllQuestions= () => {
    return Object.keys(this.state.userAnswers).length === this.state.questions.length;
  };
    handleChange = (e, questionId) => {
   
        this.setState((State) => ({
          userAnswers: {
            ...State.userAnswers,
            [questionId]: e.target.value
          }
        }));
      };

    render() {
        return (
            <>
            
       <Box sx={{ flexGrow: 1 }}>
      <AppBar   position="static" backgroundColor="black" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Quize App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
                <div>
               
                    {this.state.questions.map((data, index) => (
                        <div key={index}>
                           <h5>{`${data.id})`} <span className="question-text">{data.question}</span></h5>
                            {/* <h7>{`${data.id})`}</h7> <h4>{data.question}</h4> */}
                            {data.options.map((option, i) => (
                                <div className="form-check" key={i}>
                                    
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={data.id}
                                        value={option}
                                        // id={`flexRadioDefault-${data.id}-${i}`}
                                        onChange={(e)=>{
                                            this.handleChange(e,data.id)
                                        }}
                                    />
                                    <label className="form-check-label" For={`flexRadioDefault-${data.id}-${i}`}>
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                    
                     <Stack spacing={2} direction="row">
                     <Button variant="contained" className='button-container'  onClick={()=>{
                       this.handleClick()

                     }}>Submit</Button>

                     </Stack>
<br></br>

                     <Stack spacing={2} direction="row">
                     <Button variant="contained" className='button-container'
                      
                     >Your Score :{this.state.score}</Button>

                     </Stack>
                  <br></br>
                     <Stack spacing={2} direction="row">
                     <Button variant="contained" onClick={this.handleClick1}  disabled={!this.areAllQuestions()}>Downlod PDF</Button>
                     </Stack>
                     <br></br>
                     <Stack spacing={2} direction="row">
                     <Button variant="contained" onClick={this.props.nav}>Logout</Button>
                     </Stack>
                </div>
                
            </>
        );
    }
}

export default Application;