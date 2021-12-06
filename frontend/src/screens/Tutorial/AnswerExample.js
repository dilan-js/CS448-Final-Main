import React from 'react'

export default function AnswerExample({answer}) {
    return (
        <div>
            <h1>The answer is that the tallest bar is <span style={styles.answer}>
                 {`${answer}`}
                 </span>
                  larger than the smaller bar!</h1>
        </div>
    )
}


const styles = {
    answer: {
        color: 'red',
        marginRight: 8,
        fontWeight: 700
    }
}