ulimit -Sn 10240; locust
curl -v -X POST -H Content-type: application/x-www-form-urlencoded -d client_id=jGTkXnJ4b2pHKRB4dP2f -d client_secret=K7FCjYGXzSRNrrkRnNKpmBd2 https://leverincdev.api.looker.com/api/3.1/login
curl -X GET -H Content-type: application/x-www-form-urlencoded -H Authorization: token 3p8F8fNrssphz6cck2vzWyZ97xVzHv2kFFZnwGt4 https://leverincdev.api.looker.com/api/3.1/looks
