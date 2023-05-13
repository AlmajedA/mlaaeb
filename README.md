
# MLAAEB

This is a 'Next.js' project

## Getting Started

To test our websie please clone this repository:

```bash
git clone https://github.com/AlmajedA/mlaaeb.git
```

Next, run this command to install dependencies used in this project:

```bash
npm install
```


Then run the following to run the server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Get Started
To start using our website please create an account as **owner**, then try to create a court and view the court in my court page.



# Projcet Structure

```
.
├── Comps
│   ├── Court.js
│   ├── Footer.js
│   ├── Layout.js
│   ├── LoginBox.js
│   ├── Navbar.js
│   ├── SignUpBox.js
│   └── react-stars.js
├── README.md
├── database.db3
├── db.js
├── models
│   ├── court.js
│   └── user.js
├── package-lock.json
├── package.json
├── pages
│   ├── 404.js
│   ├── [id]
│   │   ├── [courtId]
│   │   │   ├── edit.js
│   │   │   └── manageCourt.js
│   │   ├── myCourts.js
│   │   └── new.js
│   ├── _app.js
│   ├── about.js
│   ├── api
│   │   ├── delete_court.js
│   │   ├── new_court.js
│   │   ├── signin.js
│   │   ├── signup.js
│   │   └── update_court.js
│   ├── index.js
│   ├── profile.js
│   ├── registration
│   │   ├── login.js
│   │   └── signup.js
│   └── search
│       ├── [id]
│       │   ├── index.js
│       │   └── payment.js
│       └── index.js
└── styles
    ├── dashboard.module.css
    ├── footer.module.css
    ├── globals.css
    ├── listCourtPage.module.css
    └── payment.module.css
  
```


#### This project is done by:
- Ammar Almajed
- Abdulhamid Alfaqih
- Ali Almarzooq
- Ali Ibrahim


#### Used Dependencies:
        "@nextui-org/react": "^1.0.0-beta.12",
        "bootstrap": "^5.2.3",
        "mdb-react-ui-kit": "^6.0.0",
        "next": "13.2.4",
        "prop-types": "^15.8.1",
        "react": "18.2.0",
        "react-bootstrap": "^2.7.2",
        "react-cookie": "^4.1.1",
        "react-dom": "18.2.0",
        "react-router-dom": "^6.11.0",
        "sqlite": "^4.1.2",
        "sqlite3": "^5.1.6"




