from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_qrcode import QRcode
from flask_cors import CORS
from config  import config


db = SQLAlchemy()
qr = QRcode()
cors = CORS()

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    db.init_app(app)
    qr.init_app(app)
    cors.init_app(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .api import api as api_blueprint
    app.register_blueprint(api_blueprint)

    return app