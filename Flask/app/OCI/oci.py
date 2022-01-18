import os
import oci
from oci.object_storage import UploadManager
from app import photos

basedir = os.path.abspath(os.path.dirname(__file__))
file = 'oci_key'
key_file= os.path.join(basedir, file +"."+"pem")

config = {
    "user": 'ocid1.user.oc1..aaaaaaaavh5u3tuyp6iwnlq65ea6kqsowbyli3pejxa66t3ea7lrveaajb5q',
    "key_file": key_file,
    "fingerprint":'37:f1:a4:41:c9:aa:97:8b:70:dd:5e:53:be:06:d5:48',
    "tenancy": 'ocid1.tenancy.oc1..aaaaaaaa25jojhihrfvtldw6cxjq7agfoaittrfiyclkp5z3jzwchfippxya',
    "region": 'sa-saopaulo-1'
}

osc = oci.object_storage.ObjectStorageClient(config)
up = UploadManager(osc, allow_multipart_uploads=True)
namespace = 'gru0o0u6fuun'
bucket_name ='cafe'


class UploadOci():
    def __init__(self, arq, name):
        self.arq = arq
        self.name = name

    def upload_image(self):
        filename = photos.save(self.arq, name=self.name+'.'.upper())
        path = os.path.abspath(photos.path(filename))
        name = photos.path(filename).split('/')
        up.upload_file(namespace, bucket_name, name[-1].upper(), path, content_type=self.arq.content_type)
        os.remove(path)
        return 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gru0o0u6fuun/b/cafe/o/'+name[-1].upper()


    def delete_image(self, name_arq):
        osc.delete_object(namespace, bucket_name, 'Calibrações/'+name_arq )