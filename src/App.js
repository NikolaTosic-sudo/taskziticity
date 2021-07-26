import './App.css';
import React, {useState} from "react";

const App = () => {

    // State for input numbers from user, number of steps necessary to reach the goal, and every step
    const [numbers, setNumbers] = useState([0,0,0,0])
    const [numberOfSteps, setNumberOfSteps] = useState(0)
    const [steps, setSteps] = useState([])

    // Function to handle user input, converting it into numerals, and removing every other symbol
    const handleOnChange = (e) => {

        let inputArray = [...e.target.value]

        // This would be just a temporary solution
        let onlyNumbers = inputArray.map(num => num.replace(/[^0-9]/g, '')).filter(num => num !== "")

        let stateArray = onlyNumbers.map(num => parseInt(num))

        setNumbers(stateArray)
    }


    // Function to see if the goal is reachable
    const canGoalBeReached = (nums) => {
        let len = nums.length;
        let max = 0;
        for (let i = 0; i < len; i++) {
            if (i > max) return "Can not be reached";
            max = Math.max(max, i + nums[i]);
        }
        return "Can be reached"
    };


    // Function to calculate number of steps and to see every step along the way
    const step = () => {
        let len = numbers.length;
        let allSteps = [];
        let step = 0;
        let now = 0;
        let max = 0;

        for (let i = 0; i < len - 1; i++) {
            max = Math.max(max, i + numbers[i]);
            if (i === now) {
                step++;
                now = max;
                if(now >= len){
                    now = len - 1;
                }
                allSteps.push(now)
            }
        }
        setNumberOfSteps(step)
        setSteps(allSteps)
    };

    // This holds a string value to use it later for rendering it and telling user whether goal can be reached, and if it can rendering normal button to show the most efficient path
    const itCan = canGoalBeReached(numbers)

    // Adding every step to template literal, to render it later
    const way = steps.map(step => `jump to index ${step}, `)

  return (
    <div className="App">
      <h1>Hello There</h1>
        <h3>Enter your combination</h3>
        <input
            placeholder="Input your numbers"
            type="text"
            onInput={handleOnChange}
            style={{width: "300px", height: "50px", fontSize: "20px"}}
        />

        <p>{itCan}</p>

        {itCan === "Can be reached" ? <button onClick={step} className='button'>Show the most efficient path.</button> : <button className="button2 disabled">Show the most efficient path.</button>}

        {numberOfSteps > 0 ? <p>Number of steps necessary to reach the goal is: {numberOfSteps}</p> : null}

        {steps.length > 0 ? <p>You start on index 0, then, {way} the end</p> : null}

    </div>
  );
}

export default App;
