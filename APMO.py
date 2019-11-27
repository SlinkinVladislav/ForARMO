import tornado.ioloop
import tornado.web
IP      = '127.0.0.1'
PORT    = 8080
MESSAGE = "The test message for ARMO Systems by Slinkin V.A."

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(MESSAGE)

if __name__ == "__main__":

    application = tornado.web.Application([
        (r"/", MainHandler),
    ])

    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(PORT, address = IP)
    tornado.ioloop.IOLoop.current().start()
