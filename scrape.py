from bs4 import BeautifulSoup
import lxml
import requests
from urllib.parse import urljoin

response = requests.get("http://www.frcrce.ac.in/")
web_page = response.text

soup = BeautifulSoup(web_page, "lxml")

def get_carousel_imgs():
    images = soup.find_all("img", class_="dj-image")
    img_src = [image.get("src") for image in images]

    base_url = "http://www.frcrce.ac.in/"
    img_url = [urljoin(base_url, src) for src in img_src]
    return img_url