import os
from app import create_app, mysql


app = create_app(os.getenv('FLASK_CONFIG') or 'default')



@app.cli.command()
def test():
    """run the unit test"""
    import unittest
    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner(verbosity=2).run(tests)