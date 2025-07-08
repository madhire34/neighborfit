# 🔍 Lifestyle-Based Neighborhood Matching Logic — `algorithm.md`

## 🎯 Objective

Help users discover the most compatible neighborhood tailored to their lifestyle preferences — not just rent — using a transparent, data-driven algorithm.

---

## 🧩 Input Factors Considered

The algorithm matches users based on five lifestyle dimensions:

* **Safety**: Crime rates and perceived security (scale 1–10)
* **Walkability**: Ease of navigating without a vehicle (1–10)
* **Schools**: Quality of educational institutions (1–10)
* **Nightlife**: Social and entertainment vibrancy (1–10)
* **Rent**: Monthly budget in INR (e.g., ₹15,000)

---

## ⚙️ Step-by-Step Matching Flow

### 1️⃣ Accept User Preferences

Clients submit a `POST` request to `/match`, like:

```json
{
  "safety": 7,
  "walkability": 8,
  "schools": 9,
  "nightlife": 6,
  "budget": 13000
}
```

### 2️⃣ Retrieve All Neighborhood Entries

We fetch neighborhood data from the MongoDB collection. Each record includes the same five parameters.

### 3️⃣ Score Each Neighborhood

We compute a compatibility score:

```javascript
score = 100 - (
  Math.abs(nb.safety - user.safety) +
  Math.abs(nb.walkability - user.walkability) +
  Math.abs(nb.schools - user.schools) +
  Math.abs(nb.nightlife - user.nightlife) +
  Math.abs(nb.rent - user.budget) / 100
);
```

🔎 **Why this formula?**

* Small differences = better alignment = higher score
* Budget is scaled (`/100`) so it doesn’t dominate the score
* Max theoretical score: 100 (perfect match)

### 4️⃣ Select Top Match

We track the neighborhood with the highest score. If multiple have the same score, we return the first one.

---

## 🧪 Sample Response

```json
{
  "match": {
    "name": "Indiranagar",
    "safety": 7,
    "walkability": 9,
    "schools": 8,
    "nightlife": 9,
    "rent": 14000
  },
  "score": "91.50"
}
```

---

## 🛠 Design Considerations

| Challenge                | How We Solved It                                  |
| ------------------------ | ------------------------------------------------- |
| Realistic user variation | Absolute difference scoring for flexibility       |
| Outlier rent values      | Budget scaled down (/100) to balance impact       |
| No external APIs used    | Designed for low-resource, offline-friendly setup |

---

## 🚧 Limitations & Opportunities

* ✅ Simple, interpretable logic
* ❌ Equal weight for all parameters (can improve with user-defined priorities)
* ❌ Static scoring — no personalization or learning over time

**Future Enhancements:**

* Allow user to assign weights (e.g., "safety is more important than nightlife")
* Add real-time public data (crime, commute, pollution)
* Use machine learning to predict lifestyle satisfaction scores

---

## ✅ Conclusion

This rule-based algorithm provides a solid foundation for lifestyle-neighborhood matching. It works in real-time, is scalable with new data, and keeps the logic transparent — empowering users to make informed housing choices.
