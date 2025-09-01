# Coffee API Documentation

Welcome to the Coffee API! This RESTful API is built with [NestJS](https://nestjs.com/) and provides endpoints to manage and retrieve information about different coffees. This documentation will guide you through the available endpoints, usage examples, and setup instructions.

---

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Get All Coffees](#get-all-coffees)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- Git

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/coffee-api.git
   cd coffee-api
   ```

2. **Install dependencies:**

   ```
   pnpm install
   ```

3. **Run the application:**
   ```
   pnpm start
   ```
   The API will be available at `http://localhost:3000`.

---

## API Endpoints

### Get All Coffees

- **Endpoint:** `GET /coffees`
- **Description:** Retrieves a list of all available coffees.
- **Response Example:**
  ```
  "This returns all coffees"
  ```
- **Status Codes:**
  - `200 OK` – Request was successful

#### Example Request
