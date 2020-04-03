import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import io

myurl = "https://www.baavir.com/"

#Grapping page
uClient = uReq(myurl)
page_html = uClient.read()
uClient.close()

#parses the info
page_soup = soup(page_html, "html.parser")

# #create csv file
# filename = "Baavir.csv"
# with open(filename, "w", encoding="utf=16") as f:
#
#     #csv headers
#     headers = "Date., Time., Title., Organization., Url\n"
#     f.write(headers)

#retrieve data
events = page_soup.findAll("div", {"class":"style-k8by4ap42inlineContentParent"})
event = events[0]
info = event.findAll("div", {"class":"txtNew"})
infoText = info.pop()
info2 = infoText.findAll("h4", {"class":"font_4"})
info3 = [t for t in info2 if t.find("span", {"class":"wixGuard"}) != -1]
i = 0
print(len(info2))
for t in info2:

    if(t.findAll("span", {"class":"wixGuard"}) != -1):

        print("nope" + str(i))
        i = int(i)+1


# cleanText = [i.lstrip() for i in infoText]
hour = info.pop().text


# print(hour)
print(info2)



#     for event in events:
#
#         date = event["data-day"] + "." + event["data-month"] + "." + event["data-year"].strip()
#         ampm = event.find("time").text.strip()[-2:]
#         time = event.find("time").text.strip()[:-2]
#         if ampm == "PM":
#             min = time[-4:]
#             time = str(int(time[:-4])+12)+min.strip()
#
#         titles = event.findAll("span", {"itemprop":"name"})
#         title = titles[1].text.strip()
#         ###Add if title contains POSTPONED or DELETED or CANCELLED -> delete
#         organization = titles[0].text.strip()
#
#         urls = event.findAll("a", {"itemprop":"url"})
#         eUrl = urls[1]["href"].strip()
#         #print(date + ".," + time + ".," + title + ".," + organization + ".," + eUrl)
#         #write data in csv
#         f.write(date + ".," + time + ".," + title + ".," + organization + ".," + eUrl + "\n")
#
# f.close()