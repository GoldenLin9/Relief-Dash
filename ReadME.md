# Relief-Dash

A dashboard application built with Django backend and React frontend.

## Backend Setup

### Prerequisites
- Python 3.x
- pip

## Installation
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   # On Windows
   python -m venv venv

   # On macOS/Linux
   python3 -m venv venv
   ```

3. Activate the virtual environment:
   ```
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

4. Build Docker image:
   ```
    docker build --tag django .
   ```

5. Run Docker container:
   ```
    docker run -p 8000:8000 django
   ```


## Frontend Setup (Coming Soon)

The React frontend will be added in the future.

## License

See the LICENSE file for details.