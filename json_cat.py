import json 
  
f = open('data.json',) 
  
data = json.load(f) 

f.close()

# how many looks in data
print(len(data))

# what keys have a look
print("keys:")
print(data[0].keys())

# list of ids

ids = list(map(lambda look: look['id'],data))

print (ids)

#for look in data:
#    print(look['id'])
