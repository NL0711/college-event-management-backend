from bs4 import BeautifulSoup
import lxml
import requests
from urllib.parse import urljoin
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/scarpe', methods=['GET'])
def scrape_data():
    response = requests.get("http://www.frcrce.ac.in/")
    web_page = response.text

    soup = BeautifulSoup(web_page, "lxml")

    images = soup.find_all("img", class_="dj-image")
    img_src = {image.get("src") for image in images}

    base_url = "http://www.frcrce.ac.in/"
    img_url = [urljoin(base_url, src) for src in img_src]
    print(img_url)
    return jsonify(img_url)

with app.app_context():
    print(scrape_data().get_json())

if __name__ == '__main__':
    app.run()

