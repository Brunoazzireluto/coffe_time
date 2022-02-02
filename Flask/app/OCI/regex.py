import re

class Regex():

    def __init__(self):
        self=self


    def replace_dot(self, parameters):
        value = format(parameters, '.2f')
        data = str(value)
        number = re.sub(r'(\d+)\.(\d+)',r"\1,\2", data)
        return number