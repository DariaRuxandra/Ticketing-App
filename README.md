1. Introducere
   
Aplicația mea a fost concepută ca o soluție pentru gestionarea tichetelor de suport tehnic și probleme legate de IT, fie că este vorba despre o companie, o instituție educațională sau un departament de suport tehnic intern. Proiectul este dezvoltat folosind framework-ul Next.js, alături de React.js pentru partea de frontend și MongoDB pentru stocarea datelor.
Scopul principal este oferirea unei interfețe moderne și ușor de folosit pentru a facilita urmărirea, crearea și actualizarea cererilor de suport.

2. Descrierea problemei
    
Gestionarea tichetelor de suport este o provocare frecventă pentru echipele IT sau de mentenanță. De multe ori, fără un sistem centralizat, tichetele pot fi pierdute, uitate sau tratate cu întârziere. Acest lucru duce la scăderea eficienței, frustrare din partea utilizatorilor și posibile blocaje operaționale.
Probleme identificate:
•	Lipsa unui sistem clar pentru prioritizarea tichetelor.
•	Imposibilitatea urmăririi progresului fiecărei cereri.
•	Comunicare ineficientă între utilizator și echipa de suport.

Soluția propusă:
Aplicația oferă o platformă centralizată, unde toate cererile sunt:
•	Salvate într-o bază de date.
•	Afișate în funcție de categorie.
•	Editabile, actualizabile și șterse cu ușurință.
•	Organizate pe niveluri de prioritate și progres vizual.


3. Descriere API
   
Aplicația implementează un API RESTful, ce permite operații CRUD (Create, Read, Update, Delete) asupra tichetelor. Fiecare endpoint este gândit pentru a servi cererilor din interfața utilizatorului.

Endpoints disponibile:
Metodă HTTP	Endpoint	Descriere
GET	/api/Tickets	Returnează toate tichetele existente.
POST	/api/Tickets	Creează un nou tichet.
PUT	/api/Tickets/:id	Actualizează un tichet existent.
DELETE	/api/Tickets/:id	Șterge un tichet după ID.

Structura datelor trimise (request POST):
{
  "formData": {
    "title": "Laptopul nu pornește",
    "description": "Laptopul nu se aprinde deloc.",
    "priority": 4,
    "progress": 0,
    "status": "not started",
    "category": "Hardware Problem"
  }
}
Răspuns așteptat (response 200 OK):
{
  "message": "Ticket created successfully",
  "ticket": {
    "_id": "664835e4afde2a9c",
    "title": "Laptopul nu pornește",
    "description": "Laptopul nu se aprinde...",
    "priority": 4,
    "progress": 0,
    "status": "not started",
    "category": "Hardware Problem",
    "createdAt": "2025-05-22T08:12:00.000Z"
  }
}
Autentificare și autorizare
Momentan aplicația nu include autentificare, dar arhitectura este pregătită pentru integrarea unui sistem de login prin:
•	JWT (JSON Web Tokens) pentru token-based auth
•	NextAuth.js pentru OAuth și autentificare social

4. Flux de date
   
1.	Utilizatorul creează un tichet din formular.
2.	Acesta este trimis la backend prin POST /api/Tickets.
3.	Serverul salvează datele în MongoDB.
4.	Tichetele sunt apoi afișate pe dashboard, grupate pe categorii.
5.	Utilizatorul poate actualiza progresul sau modifica statusul folosind PUT /api/Tickets/:id.
6.	Pentru ștergere se folosește DELETE /api/Tickets/:id.
Toate acțiunile sunt reflectate instant în interfața React prin refresh automat al datelor folosind router.refresh().

Link video: https://youtu.be/iGwivCBxtIQ
Link publicare: https://ticketing-app-rouge.vercel.app/





