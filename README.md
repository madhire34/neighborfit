# 🌇 NeighborFit: Personalized Neighborhood Matchmaker

NeighborFit is a lifestyle-first housing assistant that goes beyond rent and real estate. This full-stack web app helps users discover neighborhoods that truly *fit* their lives — factoring in safety, walkability, nightlife, and more.

## 🎯 Why NeighborFit?
Most platforms (like Zillow or MagicBricks) show prices and maps — but **not** how a place *feels*. What if you could say:
> "I care about safety, I walk a lot, and I love quiet weekends."

NeighborFit uses a transparent scoring algorithm to find your closest match based on **real data and your lifestyle**.

---

## 🛠 Tech Stack

| Layer     | Tech                     |
|-----------|--------------------------|
| Frontend  | React + Vite             |
| Backend   | Node.js + Express        |
| Database  | MongoDB Atlas            |
| Docs      | Markdown (`Docs/*.md`)   |
| Deploy    | Render / Vercel          |

---

## 💡 Core Features

- 🔍 Lifestyle-based matching (not just rent)
- 📦 Full-stack RESTful API (MongoDB + Express)
- 🧠 Algorithm scoring logic (`algorithm.md`)
- 🧪 Matching engine returns closest neighborhood
- 🧾 Documented research, assumptions & trade-offs

---

## 📁 Project Structure

```
NeighborFit/
├── frontend/         # React + Vite UI
├── backend/          # Express.js API
├── Docs/             # .md research + logic
│   ├── algorithm.md
│   ├── Challenges.md
│   ├── reflection.md
│   └── research.md
└── README.md
```

---

## ⚙️ Local Setup

### 1. Backend
```bash
cd backend
npm install
node server.js
```
Runs on: `http://localhost:5000`

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on: `http://localhost:5173`

---

## 📊 Example Match Request

```json
POST /match
{
  "safety": 8,
  "walkability": 9,
  "schools": 8,
  "nightlife": 6,
  "budget": 14000
}
```

Response:
```json
{
  "match": {
    "name": "Indiranagar",
    "score": "91.25"
  }
}
```

---

## 📄 Key Docs

- [`algorithm.md`](./Docs/algorithm.md): Scoring logic for matching
- [`Challenges.md`](./Docs/Challenges.md): Tech + data issues
- [`research.md`](./Docs/research.md): User & competitor research
- [`reflection.md`](./Docs/reflection.md): Learnings & limitations

---

## 🚀 Deployment

- 🌐 Frontend: Vercel or Netlify (React build)
- ☁️ Backend: Render or Railway (Express API)
- 🧰 Database: MongoDB Atlas (free tier)

---

## 🙋‍♀️ Team Notes

- 🧠 No external APIs — all logic is self-built
- ⚖️ Balanced lifestyle factors, scaled rent impact
- 🔄 Future: ML scoring, real-time filters, user weights

---

## ✅ Submission Ready

- [x] Matching algorithm implemented
- [x] Data stored in MongoDB
- [x] REST API functional + tested
- [x] Frontend connected & deployed
- [x] All required `.md` docs completed

---

> “We don’t just help you find a house. We help you find your kind of life.” — Team NeighborFit