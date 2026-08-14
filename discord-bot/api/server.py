from flask import Flask
from flask_cors import CORS
from threading import Thread

app = Flask('')
CORS(app)

def run_server() -> None:
    app.run(host='0.0.0.0', port=3000)

def keep_alive() -> None:
    t = Thread(target=run_server)
    t.daemon = True
    t.start()
