AlertsIL
========

AlertsIL is a mobile web app that give you all "Tezeva Adom" alerts in real time.
It also contain the main media sources (in Hebrew) and fetch them to one location.
It's a mobile first web application that should work great on any mobile device.

* Live Version: https://alerts-il.glitch.me/
* More details: https://greenido.wordpress.com/2014/07/09/israels-alerts-mobile-web-app-example/

![](http://greenido.files.wordpress.com/2014/07/screenshot-2014-07-09-16-28-35.png?w=247&h=300)

Goal
=========
A mobile web application that give the user all the relevant information on EVERY mobile device.
I hope we won't need to use it. This app is fetching Tzeva-Adom alerts in real time (3sec intervals)
and bring all the main news feed from Israel.

Objectives
==========
* Fresh data and alerts in real time.
* Be able to run on most of the mobile devices out there.

Features
========

* Docker

```
> Build the image
sudo docker build -t "php-gae-alertsil:v2" .

> Run the image (make sure 9090 is open on the hosted VM as the container will pass port 80 to 9090)
docker run -d -p9090:80 php-gae-alertsil:v2

> Delpoy it on your server
docker pull greenido/gae-alerts-il
```

* Tweets - Refresh them every 60sec.

* APIs for Tzeva Adom alerts in real time
  * http://www.oref.org.il/WarningMessages/Alert/alerts.json?v=1
  * (not working as of 11/2017) http://tzeva-adom.com/alerts.php?fmt=html&limit=2

Deployment
==========
```bash
gcloud app deploy app.yaml --project alerts-il

php -S localhost:8000
```

Resources
=========
* Foundation CSS framework.
It's a mobile first framework with a powerful grid system and much more.

Todo
====
### Server
* Save the alerts/news in a cloud solution (e.g. AWS, Firebase, Google CloudSQL)
* Expose an API to query the news and graph trends.

### Client
* Allow customization of the news/alerts sources.
* Add service worker support + *push notifications*

### 👉 Please feel free to fork and/or [open issues](https://github.com/greenido/GAE-AlertsIL/issues)
