from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_qrcode import QRcode
from flask_cors import CORS
from config  import config
from flask_login import LoginManager
from flask_babel import Babel


db = SQLAlchemy()
qr = QRcode()
cors = CORS()
login_manager = LoginManager()
login_manager.login_view = 'auth.login'
babel = Babel()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    db.init_app(app)
    login_manager.init_app(app)
    babel.init_app(app)
    qr.init_app(app)
    cors.init_app(app)

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .api import api as api_blueprint
    app.register_blueprint(api_blueprint)

    from .categories import categories as categories_blueprint
    app.register_blueprint(categories_blueprint)


    return app