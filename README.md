# QemaliMUN 🇺🇳🦅

**QemaliMUN** is the official web platform for the Model United Nations club at "Qemal Stafa" High School. This application serves as a hub for announcements, event management, and educational resources for student delegates, celebrating the school's 100-year history.

## 🚀 Features

  * **Dynamic Event Listing:** View upcoming MUN assemblies and events, fetched dynamically from the backend.
  * **Delegate Simulator:** An interactive "Choose Your Own Adventure" game (`/game`) to test diplomatic instincts and train new delegates.
  * **100th Anniversary Celebration:** Special branding and information commemorating "100 Vjet Histori" of the high school.
  * **About Section:** Information about the QSMUN mission, leadership staff, and club goals.
  * **Admin Dashboard:** Easy-to-use Django admin interface for managing events, descriptions, and images.

## 🛠 Tech Stack

### Frontend

  * **React.js** (v19) - Component-based UI.
  * **React Router** - Client-side routing.
  * **Axios** - HTTP client for API communication.
  * **CSS3** - Custom styling with responsive design and animations.

### Backend

  * **Python & Django** (v5.2) - Robust backend framework.
  * **Django REST Framework** - For building the RESTful API.
  * **Django CORS Headers** - To handle Cross-Origin Resource Sharing with the React frontend.
  * **SQLite** - Lightweight database for development.

-----

## 📂 Project Structure

```text
QemaliMUN/
├── frontend/                 # React Application
│   ├── public/               # Static assets (favicons, logos)
│   └── src/
│       ├── api/              # Axios configuration
│       ├── components/       # Reusable components (Navbar, Footer, EventCard)
│       ├── pages/            # Main views (HomePage, AboutPage, GamePage)
│       └── ...
│
└── portfolio-project/        # Django Backend
    ├── core/                 # Project settings and configuration
    ├── portfolio_api/        # Main app logic (Models, Views, Serializers)
    ├── media/                # User uploaded content (Event images)
    ├── db.sqlite3            # Database file
    └── manage.py             # Django command-line utility
```

-----

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1\. Prerequisites

  * Node.js & npm installed.
  * Python (3.x) installed.

### 2\. Backend Setup (Django)

1.  Navigate to the backend directory:

    ```bash
    cd portfolio-project
    ```

2.  Create a virtual environment (optional but recommended):

    ```bash
    # Windows
    python -m venv venv
    venv\Scripts\activate

    # macOS/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  Install Python dependencies:

    ```bash
    pip install django djangorestframework django-cors-headers
    ```

4.  Apply database migrations:

    ```bash
    python manage.py migrate
    ```

5.  Create a superuser (to access the admin panel):

    ```bash
    python manage.py createsuperuser
    ```

6.  Run the development server:

    ```bash
    python manage.py runserver
    ```

    *The backend API will run at `http://127.0.0.1:8000/api/`*

### 3\. Frontend Setup (React)

1.  Open a new terminal and navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2.  Install Node dependencies:

    ```bash
    npm install
    ```

3.  Start the React development server:

    ```bash
    npm start
    ```

    *The application will open at `http://localhost:3000`*

-----

## 🎮 Usage

### Adding Events (Admin)

1.  Ensure the backend is running.
2.  Go to `http://127.0.0.1:8000/admin/` in your browser.
3.  Log in with the superuser credentials you created.
4.  Navigate to **Portfolio\_Api \> Events**.
5.  Click **Add Event**. You can provide:
      * Title
      * Description
      * Location (Defaults to "Ismail Qemali Hall")
      * Date
      * Image
      * Registration Link

### Playing the Simulator

1.  On the website, navigate to **Simulator** via the Navbar.
2.  Read the diplomatic scenarios presented.
3.  Choose the best course of action to earn points and see if you have what it takes to be a top delegate.

-----

## 🔧 Configuration

  * **API Connection:** The frontend connects to the backend via `frontend/src/api/axiosConfig.js`. The default base URL is set to `http://127.0.0.1:8000/api/`.
  * **CORS:** The Django settings (`core/settings.py`) are configured to accept requests from `http://localhost:3000`.

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes (`git commit -m 'Add some NewFeature'`).
4.  Push to the branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

-----

**QSMUN Team** - *Empowering the leaders of tomorrow.*
