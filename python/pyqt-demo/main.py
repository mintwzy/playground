import sys

from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QWidget, QApplication, QVBoxLayout
from PyQt5.QtWidgets import QApplication
from PyQt5.QtWebEngineWidgets import QWebEngineView


class Example(QWidget):

    def __init__(self):
        super().__init__()

        self.initUI()

    def initUI(self):
        vbox = QVBoxLayout(self)

        self.webEngineView = QWebEngineView()
        self.loadPage()

        vbox.addWidget(self.webEngineView)

        self.setLayout(vbox)

        self.setGeometry(150, 300, 800, 600)
        self.setWindowTitle('QWebEngineView')
        self.show()

    def loadPage(self):
        url = QUrl('https://www.google.com')
        url = QUrl('dict:///fs/11503f8242d.6cfb')
        self.webEngineView.load(url)


def main():
    app = QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())


if __name__ == '__main__':
    main()
