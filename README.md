# Starlight-Vanguard-Mainframe 🛸

> **ALERT:** ⚠️ Critical system damage sustained. Mainframe offline. Protocol "Light-Side // Dark-Side" instantiated.

Welcome to the **Starlight Vanguard Mainframe**, the central operating system of a damaged Republic cruiser. Following a direct hit during an orbital blockade sprint, critical systems have suffered catastrophic failures—the passenger manifests are locked, life support grids are misaligned, and the reactor core is vulnerable to external slicing.

## The Narrative 📖

You are a technical specialist aboard the Starlight Vanguard. You have a choice: save the ship, or hijack it!

**The Light Side (Easy/Medium):**
Work to stabilize the ship. You must restore Life Support, fix the corrupted UI glitches on the dashboards, patch navigation relays, and recover the Passenger Manifest so the crew knows who survived.

**The Dark Side (Hard - "The Hack"):**
Forget the passengers! Work to bypass the Imperial Blockade security protocols, execute a cyber attack on the reactor core state, and orchestrate a complex NoSQL injection to isolate the VIP escape pods, abandoning the crew for personal gain.

---

## 🛠 Hackathon Setup & Getting Started

### 1. Database Connection (Required)
The mainframe operates entirely on MongoDB. You must have a MongoDB Database ready (such as a free tier MongoDB Atlas cluster) to run this ship.

1. Copy the `.env.example` file and rename it to `.env.local`
2. Open `.env.local` and replace the `MONGODB_URI` string with your personal MongoDB cluster connection string (Make sure to embed your real username and password).

### 2. Booting the Mainframe
Install the dependencies, load the broken mainframe data, and start the local environment:

```bash
# 1. Install dependencies
npm install

# 2. Seed the Database with the corrupted ship data and passengers 
npm run seed

# 3. Start the Next.js Operating System
npm run dev
```

> **Warning:** Immediately after running `npm run seed`, navigating to the Life Support dashboard will trigger a massive 500 server error! This is by design—you must debug the broken components to officially pass the first Light Side trial!

## Hackathon Objective 🎯

The repository contains exactly 24 interconnected GitHub issues, strictly cataloged by their Light/Dark side difficulty. Look up your assigned issues or check out the project board to see which UI glitch, API failure, or security vulnerability you should tackle next. 

May the Force be with you.
