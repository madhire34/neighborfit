# 🪞 Reflection — `reflection.md`

## 🚧 Current Limitations

Despite achieving a functional and deployable lifestyle-neighborhood matching system, the current implementation has several limitations:

### 1. ⚖️ Uniform Weighting of Factors

All lifestyle attributes (safety, walkability, schools, nightlife, rent) are treated equally in the scoring algorithm. This doesn’t reflect how real users prioritize their needs (e.g., a family may value schools over nightlife).

### 2. 🔒 Static Dataset

The neighborhoods used are manually seeded and do not auto-update. The application does not currently ingest real-time data from government APIs or open datasets.

### 3. 🚫 No User Personalization

There is no user profile system — every match is calculated statelessly. The app cannot remember previous preferences or refine recommendations over time.

### 4. 💻 Frontend Limitations

The frontend is basic and lacks advanced UX features such as:

* Filtering neighborhoods manually
* Visualizing neighborhood data
* Viewing detailed comparison charts

---

## 🌱 Opportunities for Improvement

### 1. 🧠 Weighted Scoring

Allow users to assign weights to each factor (e.g., 40% safety, 20% rent). This adds personalization and reflects diverse lifestyles more accurately.

### 2. 🔄 Real-Time Data Integration

Fetch live statistics for safety (e.g., from Bangalore Police datasets), rent trends (from real estate APIs), or even walkability scores from open civic data.

### 3. 🗺️ Visual Matching Map

Integrate a map-based interface where neighborhoods are plotted and colored by compatibility score. This improves intuitiveness and geographic understanding.

### 4. 🧩 Account & History

Introduce lightweight user accounts with match history, feedback loops ("Was this match accurate?"), and suggestion refinement.

### 5. 📊 Machine Learning

Train a basic recommendation model on user feedback to evolve the algorithm beyond fixed rules.

---

## 🧠 Final Thoughts

This project balances simplicity with real-world usefulness. It was built within tight time and resource constraints — yet showcases a structured, research-driven approach. The current version is an MVP with clear room for growth, scalability, and sophistication in future iterations.
