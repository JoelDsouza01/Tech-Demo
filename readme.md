# Tech Demo Assignment COMPSCI 732- Developed by Joel Dsouza (Student ID: 497241513) 

This server provides the backend functionality for the Angular frontend, allowing users to perform CRUD (Create, Read, Update, Delete) operations on products. The server utilizes Express and interacts with a JSON file to manage product data.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running](#running)

## Features
- **Front End:** The website is built using angular framework.
- **Express Server:** The server is built with Express, providing a robust and scalable backend.
- **CRUD Operations:** Supports Create, Read, Update, and Delete operations on guitar items.
- **JSON Data Storage:** Products are stored and manipulated within a JSON file instead of a MYSQL or any other database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JoelDsouza01/Tech-Demo.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the server:
   ```bash
   node server.js
   ```
2. The server will be running on http://localhost:3000/.

3. The Angular frontend will interact with these API endpoints to perform CRUD operations on products.
