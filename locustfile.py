from locust import HttpUser, task, between
import requests
import json

class ApiUser(HttpUser):
    wait_time = between(1, 5)

    def on_start(self):
        global options
        f = open('config.json')
        params = json.load(f)
        f.close()
        self.api = "/api/3.1/"
        self.client_id = params['apiClientId']
        self.client_secret = params['apiClientSecret']
        self.login()

    def on_stop(self):
        self.logout()

    def login(self):
        url = '{}{}'.format(self.api, 'login')
        params = {'client_id': self.client_id,
                  'client_secret': self.client_secret}
        print(url)
        with self.client.post(url,params=params,catch_response=True) as res:
            print(res.status_code)
            print(res.request.url)
            access_token = res.json().get('access_token')
            print("Connected!",access_token)
        self.client.headers.update({'Authorization': 'token {}'.format(access_token)})

    def logout(self):
        return

    @task(1)
    def get_look(self):
        look_to_get = 0
        url = '{}{}/{}/run/{}'.format(self.host, 'looks', look_to_get, 'json')

        params = {'limit': 100000}
        with self.client.get(url, params=params, stream=True) as r:
            if r.status_code == requests.codes.ok:
                print(url + ': success (200)')
            else:
                print(url + ': failure (' + str(r.status_code) + ')')

