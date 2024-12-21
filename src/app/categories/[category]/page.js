import React from 'react'

export default function Categories({ params }) {
    const { category } = params;
    return (
        <div>Category: {category}</div>
    )
}
