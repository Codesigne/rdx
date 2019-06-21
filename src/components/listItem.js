import React from 'react'

export default function listItem(props) {
    return (
        <  >
        <div class="mdc-card mdc-card--outlined">
            <p style={{ borderTop: "solid 1px" }}>1</p>
            <p> {props.name}</p>
            <p> {props.fule}</p>
            <p> {props.transmission}</p>
            <p> {props.price}</p>
        </div>
        </>
    )
}