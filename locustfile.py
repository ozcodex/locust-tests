from locust import HttpUser, task, between
import requests
import json
import random

class ApiUser(HttpUser):
    wait_time = between(1, 5)

    def on_start(self):
        f = open('config.json')
        params = json.load(f)
        f.close()
        self.api = "/api/3.1/"
        self.client_id = params['apiClientId']
        self.client_secret = params['apiClientSecret']
        self.login()
        self.load_looks()

    def on_stop(self):
        self.logout()

    def login(self):
        url = '{}/{}'.format(self.api, 'login')
        params = {'client_id': self.client_id,
                  'client_secret': self.client_secret}
        print(url)
        with self.client.post(url,params=params,catch_response=True) as res:
            if res.status_code == requests.codes.ok:
                access_token = res.json().get('access_token')
                self.client.headers.update({'Authorization': 'token {}'.format(access_token)})
            else:
                raise NameError('Unauthorized');

    def logout(self):
        self.client.headers.update({'Authorization': 'token null'})
        return

    def load_looks(self):
        url = '{}/{}'.format(self.api, 'looks')
        params = {}
        with self.client.get(url,params=params) as res:
            if res.status_code == requests.codes.ok:
                data = res.json()
                self.looks = list(map(lambda look: look['id'],data))
                print(self.looks)
            else:
                raise NameError('Error getting the ')

    @task(1)
    def get_look(self):
        look_to_get = random.choice(self.looks)
        url = '{}/{}/{}'.format(self.api, 'looks', look_to_get)

        params = {'limit': 10000}
        with self.client.get(url, params=params, stream=True) as res:
            if res.status_code == requests.codes.ok:
                print(url + ': success (200)')
            else:
                print(url + ': failure (' + str(res.status_code) + ')')


