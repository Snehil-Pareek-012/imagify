# 🎨 Imagify | AI Image Generation SaaS

**Imagify** is a full-stack AI-powered Image Generation platform built using the **MERN stack**. It allows users to transform text prompts into high-quality images using the ClipDrop API, featuring a functional credit system and integrated payments.

---

## 🚀 Key Features
* **AI Image Generation:** Seamless integration with **ClipDrop API** for high-quality text-to-image conversion.
* **User Authentication:** Secure signup and login flow using **JWT (JSON Web Tokens)**.
* **Credit System:** A logic-driven backend that deducts credits for every image generated.
* **Payment Integration:** Fully functional **Razorpay** gateway for purchasing image credits.
* **Responsive UI:** Modern, fast frontend built with **Vite and React**.
* **Database Management:** **MongoDB** for storing user profiles, transaction history, and credit balances.

---

## 🛠️ Tech Stack

| Layer          | Technology                     |
| :------------- | :----------------------------- |
| **Frontend** | React.js, Vite, Tailwind CSS   |
| **Backend** | Node.js, Express.js            |
| **Database** | MongoDB                        |
| **AI Engine** | ClipDrop API                   |
| **Payments** | Razorpay                       |
| **Auth** | JWT & Bcrypt                   |

---

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Snehil-Pareek-012/imagify.git
cd imagify

```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```
cd server
npm install
```

### 3. Create a .env file in the /server folder and add your credentials:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
Start the server:
``` npm start ```

### 4. Frontend Setup
Open a new terminal, navigate to the client directory, and install dependencies:
```
cd client
npm install
```

### 5. Start the development server:
```
npm run dev
```


###  🗺️ Roadmap & Future Enhancements
[ ] Dockerization: Containerize the application for easier deployment.

[ ] Social Feed: Allow users to share their generated art in a public gallery.

[ ] Image History: Dashboard for users to view and download past generations.

[ ] Java Migration: Explore migrating the backend to Spring Boot for high-scale performance.
