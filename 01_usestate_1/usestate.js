//functional component
const cat = (props) => {
    //const declration with hook
    const [isHungry, setIsHungry] = React.useState(true);
    
    // return value with JSX
    retrun (
        <div>
            <p> I am {props.name}, and i am{isHungry ? "hungry" : "Full"}! </p>
            <button
                onClick={() =>{
                    //change the state value
                    setIsHungry(False);
                }}
                disabled={isHungry}
            >
                {isHungry ? "pour me some milk, please!": "Thank you!"}
            </button>
        </div>
    );
}

// Functional Component
const Cafe = () => {
    return (
        <div>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </div>
    );
}

const myElement = <Cafe />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);