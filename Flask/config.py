import os 

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'Chave Secreta'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    BABEL_DEFAULT_LOCALE = 'pt'
    UPLOADED_PHOTOS_DEST = "images"
    RESTFUL_JSON = {'ensure_ascii': False}
    MYSQL_DATABASE_HOST = 'localhost'
    MYSQL_DATABASE_USER = 'Azzi'
    MYSQL_DATABASE_PASSWORD = 'Bu.62991881'
    MYSQL_DATABASE_DB = 'Coffe_time'

    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    DEBUG = True
    #Casa
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or 'mysql://Azzi:Bu.62991881@localhost/Coffe_time'
    #Maeda
    #SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or 'mysql://maeda-st:Maeda123@localhost/coffe_api'


class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('TEST_DATABASE_URL') or 'mysql://Azzi:Bu.62991881@localhost/test'

class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'Caminho/Banco/produção'

config = {
    'development' : DevelopmentConfig,
    'testing': TestingConfig,
    'Production' : ProductionConfig,

    'default' : DevelopmentConfig
}   