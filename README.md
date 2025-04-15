# React-Recap-studenti

# Obiettivo
Costruire una mini-app React per gestire la lista degli studenti, partendo da uno starter HTML + CSS già fornito.

# Contiene:
- Form per aggiungere uno studente (name, course, status)
- Filtri per nome e corso
- Ordinamento per nome o corso
- Elenco iniziale con pulsanti Modifica / Elimina
- Form di modifica visibile solo al clic su “Modifica”
- Messaggi per inserimenti, modifiche o errori

# Milestone 1 – Visualizzazione dinamica
- Trasforma l’HTML in componenti React
- Usa useState per visualizzare dinamicamente gli studenti
- Avvia con un array statico di esempio (minimo 2 studenti)

# Milestone 2 – Fetch da API esterna + struttura studenti
- Crea un array locale di corsi.
- Fai una richiesta GET a https://jsonplaceholder.typicode.com/users usando useEffect
- Mappa la risposta per ottenere oggetti con questo formato.
- Inserisci questi studenti nello stato.

# Milestone 3 – Aggiunta studente
- Collega il form allo stato
- Al submit:
- Valida i dati
- Aggiungi il nuovo studente immutabilmente
- Mostra messaggio di conferma
- Resetta il form

# Milestone 4 – Filtri e Ordinamento
- Filtro live su name e course
- Ordinamento per nome o corso tramite select

# Milestone 5 – Eliminazione
- Rimuovi lo studente dallo stato al clic su “Elimina”
- Mostra messaggio di conferma

# Milestone 6 – Modifica
- Al clic su “Modifica”, mostra il form inline per quello studente
- Al clic su “Salva modifiche”:
- Valida i dati

# Aggiorna lo studente nello stato
- Mostra messaggio di conferma o errore
- Concetti da usare : useState, useEffect event.target.name per form dinamici
- map, filter, sort in modo immutabile
- Rendering condizionale per la form di modifica
- Componenti riutilizzabili

# Bonus (facoltativi)
- Contatore studenti totali
- Ordinamento asc/desc
- Validazione completa lato frontend
- Gestione del campo course anche in fase di modifica (con select)

# Consegna
- App funzionante in locale (npm run dev)
- Codice chiaro, leggibile e diviso in componenti
- README (puoi usare readme.so) con:
- # Istruzioni per l’avvio:
- Funzionalità implementate
- Bonus realizzati
- Composizione del team