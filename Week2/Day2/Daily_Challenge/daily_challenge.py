class Pagination():
    def __init__(self, items=None, pageSize=10):
        self.items=items
        self.pagesize =pageSize
    def getVisibleItems(self):



alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)



p.getVisibleItems()

# To The Checker:
# I did not understand well to do this exercise 