
# 🛒 Amazon Clone using HTML & CSS  

## Overview  
This Amazon Clone is a full-stack e-commerce web application that replicates the core functionalities of the Amazon website. The frontend is built using HTML, CSS, and JavaScript, delivering a responsive and interactive user interface. The backend is developed using Java Spring Boot and connected to a MySQL database to handle all business logic, including user management, product catalog, cart system, and order processing.

It is designed to provide a real-world project experience by combining frontend and backend development, making it ideal for full-stack Java developers and students aiming to build industry-level e-commerce platforms.

📌 Key Features
Frontend (HTML, CSS, JavaScript)
Responsive homepage with header, navigation bar, product grid, and footer

Interactive UI elements (e.g., add to cart, hover effects, image carousels)

Dynamic DOM manipulation using JavaScript

Simple user session management with local storage

Backend (Java Spring Boot)
RESTful APIs to manage users, products, orders, and carts

JWT-based user authentication and role-based access

Admin module for product management (CRUD operations)

Order processing with backend validation

Database integration with MySQL

🧱 Tech Stack
👨‍🎨 Frontend
HTML5

CSS3

JavaScript (Vanilla)

🧑‍💻 Backend
Java 17+

Spring Boot

Spring Security (JWT)

Spring Data JPA

MySQL Database

Maven / Gradle
## 🚀 Installation & Setup  
🛠️ Setup Instructions
💻 Frontend
Open the amazon.html file in a browser.

Make sure the JavaScript is properly linked in script.js.

Connect to backend APIs via fetch() if needed.

🧩 Backend
1. Clone the repo:
git clone https://github.com/nandyalanaveen13/Amazon-Clone.git
cd Amazon-Clone/backend

2. Set up MySQL and update your application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/amazon_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
3. Run the application:

bash
Copy
Edit
./mvnw spring-boot: run 

✨ Future Improvements
Payment gateway integration (Razorpay / Stripe)

User reviews and ratings

Email notifications

Wishlist functionality

Product filtering and sorting
   ```
## 📌 How It Works  
1. The **Navbar** includes the **Amazon logo, search bar, sign-in, cart, and menu links**.  
2. A **hero section** features a promotional banner.  
3. The **product section** showcases categories like **electronics, fashion, and beauty**.  
4. The **footer** includes **Amazon services and links**.  

## 📷 Screenshots  
![Screenshot (321)](https://github.com/user-attachments/assets/b1aa7b92-d235-4e19-b960-2820a3236f90)
![Screenshot (322)](https://github.com/user-attachments/assets/707f1cee-13c1-47e5-b312-768cc88c1ddb)





