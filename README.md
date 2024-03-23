# GlamHub
Welcome to my GitHub repository showcasing a production-level eCommerce website developed from scratch! This project is a result of hands-on experience gained through a comprehensive tutorial series aimed at enhancing skills in full-stack development.

In this project, I have leveraged popular technologies such as Spring Boot, React, MySQL, Razorpay, Material-UI (MUI), Tailwind CSS, Redux, and React Router DOM to create a robust and user-friendly eCommerce platform. The frontend design focuses on creating an engaging user interface using React and Material-UI, incorporating features like carousels, product filtering, sorting, and pagination for a seamless browsing experience.

On the backend, I have built a secure and scalable server-side application with Spring Boot integrated with a MySQL database. This setup allows for efficient management of product information, user profiles, and order details. User authentication and authorization mechanisms have been implemented to ensure secure access control.

To facilitate secure online transactions, the Razorpay payment gateway has been seamlessly integrated into the platform, enabling customers to make payments securely during checkout. Additionally, an order summary functionality has been implemented to allow users to review their orders before finalizing payment.

Moreover, an intuitive admin panel has been developed to streamline product and order management tasks. Administrators can effortlessly add, edit, manage products, and track orders efficiently through this dashboard.
This project serves as a testament to my proficiency in full-stack development and showcases my ability to create functional eCommerce websites using modern technologies.

## Project setup(Required for me)
1. npx create-react-app glamhub 
2. install mui Material UI
    a. open https://mui.com/
    b. click on discover core libraries
    c. click on material UI
    d. click on get started
    e. click on instalation and copy the cmd
        eg: npm install @mui/material @emotion/react @emotion/styled
3. install mui Material icon
    a. open https://mui.com/
    b. click on discover core libraries
    c. click on material UI
    d. click on get started
    e. click on components
    f. click on material icon and copy the cmd
        eg: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
4. install tailwind css
    a. https://tailwindcss.com/docs/installation
    b. click on framework guidelines
    c. click on create react app
    d. copy cmds of Install Tailwind CSS
        npm install -D tailwindcss
        npx tailwindcss init
    e. copy code snippet of Configure your template paths and paste it in tailwind.config.js
    ```
        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
    ```
5. copy the directives of Add the Tailwind directives to your index.css
    ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```
