from flask import Flask
from flask import jsonify
import numpy as np


app = Flask(__name__)

@app.route("/api/test")
def hello_world():
    return jsonify({"test":np.random.randint(1, 1000)})


