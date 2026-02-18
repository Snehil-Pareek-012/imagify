🎨 Imagify | AI Image Generation SaaSImagify is a full-stack AI-powered SaaS application that transforms text prompts into stunning visual art. Built with the MERN stack, it features a functional credit-based system, secure user authentication, and integrated payments.

🚀 Key Features
AI-Powered Generation: Leverages the ClipDrop API to generate high-quality images from text descriptions.Credit System: A logic-driven backend that deducts credits for every image generated.Secure Payments: Integrated Razorpay Gateway for users to purchase image generation credits.User Authentication: Secure signup/login flow using JWT (JSON Web Tokens).Modern UI/UX: Built with React and Vite for a blazing-fast, responsive user experience.Database Management: MongoDB handles user profiles, transaction history, and real-time credit balances.🛠️ Tech StackLayerTechnologyFrontendReact.js, Vite, Tailwind CSSBackendNode.js, Express.jsDatabaseMongoDBAI EngineClipDrop APIPaymentsRazorpayAuthJWT & Bcrypt📋 Installation & Setup1. Clone the RepositoryBashgit clone https://github.com/Snehil-Pareek-012/imagify.git
cd imagify
2. Backend SetupNavigate to the server directory and install dependencies:Bashcd server
npm install
Create a .env file in the /server folder and add your credentials:Code snippetMONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
Start the server:Bashnpm start
3. Frontend SetupOpen a new terminal, navigate to the client directory, and install dependencies:Bashcd client
npm install
Start the development server:Bashnpm run dev
🗺️ Roadmap & Future Enhancements[ ] Dockerization: Containerize the app using Docker for easier deployment.[ ] Social Feed: Allow users to share their generated art in a public gallery.[ ] Image History: Add a dashboard for users to view and download their past generations.