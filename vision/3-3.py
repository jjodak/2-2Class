import cv2 as cv
import sys

img=cv.imread('/Users/cho/2-2Class/vision/soccer.jpg')

t,bin_img=cv.threshold(img[:,:,2],0,255,cv.THRESH_BINARY+cv.THRESH_OTSU)
print('오츄 알고리즘이 찾은 최적 임겟값=',t)

cv.imshow('R channel', img[:,:,2])
cv.imshow('20252365 cjh', bin_img)

cv.waitKey()
cv.destroyAllWindows()
