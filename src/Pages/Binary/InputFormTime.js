import React, { useState, useRef, useEffect} from 'react';


export default function InpuForm(params) {
    const [time, setTime] = useState('00:10');
    const timeInputRef = useRef(null);


    useEffect(() => {
        params.getFormTime(time)
    }, [time])

    const handleTimeChange = () => {
        setTime(timeInputRef.current.value);

    };

    const incrementTime = () => {
        if (timeInputRef.current) {
            timeInputRef.current.stepUp(1); // Увеличиваем на 1 минуту
            setTime(timeInputRef.current.value);
        }
    };

    const decrementTime = () => {
        if (timeInputRef.current) {
            timeInputRef.current.stepDown(1); // Уменьшаем на 1 минуту
            setTime(timeInputRef.current.value);
        }
    };

    return (
        <div>
            <div className="binary-input-form-wrap">
                <div className="binary-input-form-label"> Time: </div>
                <div className="binary-input-form">
                    <button className="binary-input-form-button" onClick={decrementTime}>-</button>
                    <input
                        type="time"
                        ref={timeInputRef}
                        value={time}
                        className="binary-input"
                        onChange={handleTimeChange}
                    />
                    <button className="binary-input-form-button" onClick={incrementTime}>+</button>
                </div>
            </div>
        </div>
    )
}