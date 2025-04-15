import React from 'react'

export default function FilterBar() {
  return (
    <section className="filter-section">
    <h2>Filtra</h2>
    <input type="text" id="filter-name" placeholder="Filtra per nome" />
    <input type="text" id="filter-course" placeholder="Filtra per corso" />
  </section>
  )
}
