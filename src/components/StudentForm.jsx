import React from 'react'

export default function StudentForm() {
  return (
    <section className="form-section">
    <h2>Aggiungi Studente</h2>
    <form id="student-form">
      <label>
        Nome:
        <input type="text" name="name" required />
      </label>
      <label>
        Corso:
        <input type="text" name="course" required />
      </label>
      <label>
        Stato:
        <select name="status" required>
          <option value="active">Attivo</option>
          <option value="inactive">Inattivo</option>
        </select>
      </label>
      <button type="submit">Aggiungi</button>
    </form>
  </section>
  )
}
