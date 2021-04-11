
class Config(object):
    DEBUG= False
    TESTING= False
    SYMBOLS= ["AAAA","BBBB","CCCC","DDDD"]
    UPDATE_FREQUENCY_MILLISECONDS = 3000
    ELEMENTS_PER_UPDATE = 50


class DevelopmentConfig(Config):
    DEBUG=True
    

