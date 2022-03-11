import pandas as pd 
import boto3
from io import StringIO
import dill

bucket_name = 'sagemaker-project-p-cpuoftuqod3c'
key = 'data.csv'
key1 = 'RFC_grid_cation.pickle'
key2 = 'RFC_grid_vis.pickle'

s3_get = boto3.client('s3')
obj = s3_get.get_object(Bucket=bucket_name, Key=key)
body = obj['Body'].read()
bodystr = body.decode('utf-8')
df = pd.read_csv(StringIO(bodystr))

response1 = s3_get.get_object(Bucket=bucket_name, Key=key1)
body1 = response1["Body"]
cation_model = dill.loads(body1.read())
response2 = s3_get.get_object(Bucket=bucket_name, Key=key2)
body2 = response2["Body"]
vis_model = dill.loads(body2.read())

cation = cation_model.predict(df)
vis = vis_model.predict(df)
c = float(cation)
v = float(vis) 
print(c)
print(v)
