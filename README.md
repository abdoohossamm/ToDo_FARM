# ToDo App
Todo Application made using FARM stack (Python, FastAPI, React on NextJS, MongoDB)
![TodoApp image](https://github.com/abdoohossamm/ToDo_FARM/blob/main/nextjs/public/ApplicationImageV1.png?raw=true)

### Prerequisites:
- GIT (latest)
- Python ≥ 3.10
- Node.js ≥ 14.0.0
- MongoDB
- Any code editor or IDE (PyCharm recommended for Python and Django)

## Installation

Clone the project

Via SSH:
```bash
git clone git@github.com:abdoohossamm/ToDo_FARM.git
```
Via HTTPS:
```bash
git clone https://github.com/abdoohossamm/ToDo_FARM.git
```

Change directory to the cloned project

```bash
cd ToDo_FARM
```

## Run the backend

```bash
cd FastAPI
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Run the frontend

```bash
cd nextjs
npm install
npm run dev
```
