import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import io
import re

print("Scrapping data from: Baavir.com")

myurl = "https://www.baavir.com/"

#Grapping page
uClient = uReq(myurl)
page_html = uClient.read()
uClient.close()

#parses the info
page_soup = soup(page_html, "html.parser")

#create csv file
filename = "./Data/Baavir.csv"
with open(filename, "w", encoding="utf=16") as f:

    #csv headers
    headers = "Date., Time., Title., Url\n"
    f.write(headers)

    #retrieve data
    info = page_soup.find("div", {"id":"comp-k8jqm5nb1inlineContent-gridContainer"})
    date = info.find("span", {"style":"font-size:38px;"}).text.split(" ")
    for d in date:
        if "." in d:
            date = d
    events = info.findAll("div", {"style":"display:flex;flex-direction:column"})
    for e in events:
        eUrl = e.find("a", {"class":"ImageButton_1link"})["href"]
        moreInfo = e.findAll("h4")
        pattern = re.compile('<span class="wixGuard">')
        titleTime = []
        for i in moreInfo:
            if pattern.search(str(i)) is not None or i.text.strip() == "" or i.text.strip() == " ":
                continue
            titleTime.append(i.text.strip())
        time = titleTime.pop(0)
        title = " - ".join(titleTime)

        #write data in csv
        f.write(date + ".," + time + ".," + title + ".," + eUrl + "\n")

f.close()