import bs4
from urllib.request import urlopen as uReq
from urllib.request import Request
from bs4 import BeautifulSoup as soup
import io
import re

myurl = "https://www.zappa-club.co.il/content/the-show-must-go-on/"

#Grapping page
req = Request(myurl, headers={'User-Agent': 'Mozilla/5.0'})
uClient = uReq(req)
page_html = uClient.read()
uClient.close()

#parses the info
page_soup = soup(page_html, "html.parser")

#create csv file
filename = "./Data/Zappa.csv"
with open(filename, "w", encoding="utf=16") as f:

    #csv headers
    headers = "Date., Time., Title., Url\n"
    f.write(headers)
    #retrieve data
    url = myurl

    ref = page_soup.find("div", {"class":"content_group wide_-content"})
    events = ref.findAll("p")
    pattern = re.compile("נתון לשינויים")
    eIndex = 0
    for i, e in enumerate(events):
        if pattern.search(str(e)) is not None:
            eIndex = i
    # dateday = events[eIndex+1].find("strong").text.split("-")


    eList = str(events[eIndex+1]).split("<br/>")
    eList = [soup(l, "html.parser").text for l in eList]
    dateDay = eList.pop(0).split(" - ")
    date = dateDay.pop().strip()
    day = dateDay.pop().strip()
    print("day " + day)
    print("date " + date)

    for event in eList:
        if event.count("-") == 1:
            sEvent = event.split(" - ")
            title = sEvent.pop()
            time = sEvent.pop()
        elif event.count("-") > 1:
            sEvent = event.split(" - ")
            time = sEvent.pop(0)
            title = sEvent.pop(0)
        print(date + ".," + time + ".," + title + ".," + url)
        #write data in csv
        f.write(date + ".," + time + ".," + title + ".," + url + "\n")
#
f.close()