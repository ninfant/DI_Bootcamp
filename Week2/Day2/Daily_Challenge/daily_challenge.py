# class Pagination:
#     def __init__(self, items=None, pageSize=10):
#         self.items = items
#         self.pageSize = pageSize
#         self.currentPage = 1
#         self.initializeDefaults()
    
#     def initializeDefaults(self):
#         if self.items is None:
#             self.items = []
        
#         if isinstance(self.pageSize, float):
#             self.pageSize = int(self.pageSize)
        
#         if self.pageSize < 1:
#             self.pageSize = 1
        
#         self.calculateTotalPages()
    
#     def calculateTotalPages(self):
#         total_items = len(self.items)
#         self.totalPages = 1
#         if total_items > 0:
#             self.totalPages = total_items // self.pageSize
#             if total_items % self.pageSize != 0:
#                 self.totalPages += 1
    
#     def getVisibleItems(self):
#         start_index = (self.currentPage - 1) * self.pageSize
#         end_index = start_index + self.pageSize
#         visible_items = []
        
#         index = start_index
#         while index < end_index and index < len(self.items):
#             visible_items.append(self.items[index])
#             index += 1
        
#         return visible_items
    
#     def prevPage(self):
#         if self.currentPage > 1:
#             self.currentPage -= 1
#         return self
    
#     def nextPage(self):
#         if self.currentPage < self.totalPages:
#             self.currentPage += 1
#         return self
    
#     def firstPage(self):
#         self.currentPage = 1
#         return self
    
#     def lastPage(self):
#         self.currentPage = self.totalPages
#         return self
    
#     def goToPage(self, pageNum):
#         if isinstance(pageNum, float):
#             pageNum = int(pageNum)
        
#         if pageNum < 1:
#             pageNum = 1
#         elif pageNum > self.totalPages:
#             pageNum = self.totalPages
        
#         self.currentPage = pageNum
#         return self


# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# p = Pagination(alphabetList, 4)

# print(p.getVisibleItems()) 
# p.nextPage()
# print(p.getVisibleItems())
# p.lastPage()
# print(p.getVisibleItems()) 
# p.goToPage(2)
# print(p.getVisibleItems()) 