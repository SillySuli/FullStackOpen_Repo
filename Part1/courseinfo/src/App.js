
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return( 
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part = {props.part1} exercise = {props.exercise1} />
      <Part part = {props.part2} exercise = {props.exercise2}/>
      <Part part = {props.part3} exercise = {props.exercise3}/> 
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p> Number of exercises {props.number1 + props.nubmer2 + props.number3}</p>
    </div>
  )
}

const App = () => {
  
  // Original  
//  const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

 
  // Modifaction for 1.3

  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }


  // Modifaction for 1.4
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  // // Destructuring the array. 

  // const [part1, part2, part3] = parts


  // Modification for part 1.5.
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  } 

  const [part1, part2, part3] = course.parts

  return (
    <div>
      <Header course ={course.name}/> 
      <Content part1 = {part1.name} exercise1 = {part1.exercises} part2 = {part2.name} exercise2 = {part2.exercises} part3 = {part3.name} exercise3 = {part3.exercises}/>
      <Total number1 = {part1.exercises} nubmer2 = {part2.exercises} number3 = {part3.exercises}/>
    </div>
  )
}
export default App

