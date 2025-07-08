# 🚧 Real-World Roadblocks in Building NeighborFit — `challenges.md`

## 🛍️ Introduction

No great product is built without friction. In crafting **NeighborFit**, we encountered several **practical and technical challenges** — ranging from missing data to infrastructure hiccups. Here’s how we tackled each one, with no budget and a two-week clock ticking.

---

## 🗱 1. Missing Public Data for Bangalore Neighborhoods

### 📍 What Happened:

We couldn’t find any free, structured dataset that included safety, walkability, school quality, or nightlife for Bangalore neighborhoods.

### 🌟 What We Did:

* Created a custom dataset with handpicked areas like Indiranagar, Whitefield, and Jayanagar.
* Referenced real estate websites, user forums, Google Maps reviews, and Quora threads to estimate ratings (on a scale of 1–10).
* Estimated average rents based on 1BHK/2BHK listings from portals like 99acres and NoBroker.

> “We went grassroots — manually building the data we wished existed.”

---

## 🌐 2. MongoDB Atlas Access Issues

### 🚨 Initial Problems:

* `ENOTFOUND` errors due to SRV DNS misconfigurations.
* Authentication failures (`bad auth`) from unencoded passwords.
* Misuse of MongoDB connection string in `.env`.

### 🚰 Fixes Implemented:

* Updated `.env` to store the full `MONGO_URI` with correct formatting.
* Replaced special characters in passwords using URL encoding.
* Whitelisted `0.0.0.0/0` to allow dev access from anywhere.

---

## ⚙️ 3. JSON Parsing Failures

### 📍 Symptom:

Postman kept throwing 400 errors on POST requests to `/neighborhoods`.

### 🔍 Root Cause:

* Forgetting to set header: `Content-Type: application/json`
* Express middleware `express.json()` was missing in early versions.

### 💡 Lesson:

Even a one-line middleware can break an entire backend — never skip proper JSON handling.

---

## 🧹 4. No Easy Way to Reset Data

### ❗ Issue:

We had no frontend admin panel. Resetting test data meant dropping it manually in Atlas UI.

### 🚀 Solution:

* Added a temporary POST endpoint `/neighborhoods/delete-all`
* Called it via Postman to clean up test data before adding real Bangalore entries.

This allowed us to iterate quickly without touching the MongoDB UI each time.

---

## 🧲 5. Scoring Bias in Matching Algorithm

### 🔍 Initial Problem:

Budget was overpowering lifestyle scores in the matching formula.

### ⚖️ Fix:

* Scaled rent difference by `/100` in the scoring logic.
* This ensured lifestyle mismatches were not hidden by rent variance.

---

## 🧪 Bonus: Edge Case Testing

* What if no neighborhoods are in the DB?
* What if rent is extremely high or low?

We handled these using:

* Default error messages
* Early returns in scoring logic
* Required fields in the schema (name, safety, rent, etc.)

---

## 💭 Final Thoughts

| Challenge      | Resolution                       |
| -------------- | -------------------------------- |
| No dataset     | Created realistic one manually   |
| MongoDB errors | Fixed config, encoded passwords  |
| JSON issues    | Used proper headers + middleware |
| Matching bias  | Balanced scoring algorithm       |
| No admin panel | Built deletion endpoint for dev  |

---

## ✅ Takeaway

Building NeighborFit with limited resources pushed us to **be scrappy**, **iterate fast**, and **solve creatively**. These challenges didn't slow us down — they shaped the solution.
