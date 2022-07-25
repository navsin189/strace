import subprocess as sp

from rest_framework.views import APIView
from rest_framework.response import Response

class StraceOutput(APIView):

    def post(self,request):
        """
        return the strace output
        """
        cmd = request.data.get("command")
        result = sp.getoutput(cmd)
        result = result.split("\n")
        # result = result.replace("\n"," ")
        # with open("newfile.txt","w") as hihi:
        #     hihi.write(result)
        # with open("newfile.txt","r") as hihi:
        #     d = hihi.readlines()
        print("len",len(result))
        return Response({"input":result,"length": len(result)})
    def get(self,request):
        return Response("Enter either process ID or name")
        