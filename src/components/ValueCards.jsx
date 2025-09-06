import React from 'react'

export default function ValueCards({ t }) {
    const items = [
        { title: t.value1_t, desc: t.value1_d },
        { title: t.value2_t, desc: t.value2_d },
        { title: t.value3_t, desc: t.value3_d }
    ]
    return (
        <div className="cards">
            {items.map((it, idx) => (
                <div className="card" key={idx}>
                    <h3>{it.title}</h3>
                    <p>{it.desc}</p>
                </div>
            ))}
        </div>
    )
}