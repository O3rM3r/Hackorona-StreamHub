import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import io

print("Scrapping data from: Meetup.com")

myurl = "https://www.meetup.com/find/events/?allMeetups=true&radius=100&userFreeform=Tel+Aviv%2C+Israel&mcName=Tel+Aviv%2C+IL&lat=32.066498&lon=34.765198"

#Grapping page
uClient = uReq(myurl)
page_html = uClient.read()
uClient.close()

#parses the info
page_soup = soup(page_html, "html.parser")

#create csv file
filename = "./Data/Meetups.csv"
with open(filename, "w", encoding="utf=16") as f:

    #csv headers
    headers = "Date., Time., Title., Url\n"
    f.write(headers)

    #retrieve data
    events = page_soup.findAll("li", {"itemtype":"http://data-vocabulary.org/Event"})
    # event1 = events[0]

    for event in events:

        date = event["data-day"] + "." + event["data-month"] + "." + event["data-year"].strip()

        fullTime = event.find("time").text.strip().split('\n')
        ampm = fullTime.pop()
        time = fullTime.pop()
        if ampm == "PM":
            min = time[-3:]
            time = str(int(time[:-3])+12)+min

        titles = event.findAll("span", {"itemprop":"name"})
        title = titles[1].text.strip()
        lTitle = title.lower()
        if lTitle.find("postponed") != -1 or lTitle.find("cancelled") != -1 or lTitle.find("canceled") != -1:
            continue

        organization = titles[0].text.strip()

        urls = event.findAll("a", {"itemprop":"url"})
        eUrl = urls[1]["href"].strip()
        # print(date + ".," + time + ".," + title + ".," + organization + ".," + eUrl)
        #write data in csv
        f.write(date + ".," + time + ".," + title + ".," + eUrl + ".," + organization + "\n")

f.close()