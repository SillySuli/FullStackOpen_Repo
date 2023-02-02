import { useState } from 'react'



const Button = ({handleEvent, text}) => (
 <button onClick = {handleEvent}>
  {text}
 </button> 
)

const StatisticsLine = ({text, number, suffix}) => (

  <tr>
    <td>{text}</td>
    <td>{number} {suffix}</td>  
  </tr>

)


const Statistics = ({num1, num2, num3}) => {

  const allEvents = num1 + num2 + num3

  if ( allEvents === 0){
    return (
      <div>No feedback given</div>
    )}

  return(
  <table>
    <tbody>
      <StatisticsLine text = "good" number = {num1}/>
      <StatisticsLine text = "neutral" number = {num2}/>
      <StatisticsLine text = "bad" number = {num3}/>

      <StatisticsLine text = "all" number = {num1 + num2 + num3}/>
      <StatisticsLine text = "average" number = {(num1 + num3 * -1)/( num1 + num2 + num3)}/>
      <StatisticsLine text = "Positive" number = {((num1)/(num1 + num2+ num3 ) * 100).toString()} suffix = "%" /> 
    </tbody>
  </table>)}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood( good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

        <Button handleEvent={handleGood} text = "good"/> 
        <Button handleEvent={handleNeutral} text = "neutral"/>
        <Button handleEvent={handleBad} text = "bad"/>

      
      <h1>statistics</h1>

      <Statistics num1 = {parseInt(good)} num2 = {parseInt(neutral)} num3 = {parseInt(bad)} />


    </div>
  )
}

export default App