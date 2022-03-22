import {useState} from 'react';

function DeliveryTime() {
    const [timeButton, clickedTime] = useState("Click here for estimated delivery time.");
    const showTime = (time) => clickedTime(time)

    const currentDate = new Date()
    const date = new Date(currentDate.getTime() + 20*60000) 

    return(
        <div>
            <button  className = 'DeliveryTime' onClick={() => showTime (
                
                `Place order now to receive at: ${date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})}`

            )}>
                {timeButton}
            </button>
        </div>
    )
}

export default DeliveryTime;

