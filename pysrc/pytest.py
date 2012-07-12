from websync.sync.adressing import Modifiers
from websync.exceptions import BadPathSyntaxException


vari = "hallo"
print vari

try:
    mo = Modifiers("all")
except BadPathSyntaxException, e:
    print e.toString()
