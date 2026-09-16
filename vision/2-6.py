import cv2 as cv
import sys

img = cv.imread('soccer.jpg')

if img is None:
    sys.exit('파일을 찾을 수 없습니다.')

cv.rectangle(img,(130,30),(320,230),(0,0,255),2)
cv.putText(img,'범죄자 찢재명',(50,320),cv.FONT_HERSHEY_SIMPLEX,1,(255,0,0),2)

cv.imshow('Draw',img)

cv.waitKey()
cv.destroyAllWindows()